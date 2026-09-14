import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import type { Context, Next } from 'hono';
import { cors } from 'hono/cors';
import { Resend } from 'resend';
import { z } from 'zod';
import { WelcomeEmail } from './emails/WelcomeEmail';

type WorkerEnv = Env & {
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
};

const isAllowedOrigin = (value: string | undefined): boolean => {
  if (!value) return false;

  try {
    const url = new URL(value);
    const isLocal = url.protocol === 'http:' && url.hostname === 'localhost' && url.port === '4321';
    const isProduction = url.protocol === 'https:' && url.hostname === 'urfit-child.com';
    const isPages =
      url.protocol === 'https:' &&
      (url.hostname === 'urfit-child.pages.dev' || url.hostname.endsWith('.urfit-child.pages.dev'));

    return isLocal || isProduction || isPages;
  } catch {
    return false;
  }
};

const app = new Hono<{ Bindings: WorkerEnv }>();

// CORS middleware
app.use(
  '/subscribe',
  cors({
    origin: (origin) => (isAllowedOrigin(origin) ? origin : ''),
    allowMethods: ['POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'X-Requested-With'],
  })
);

// Validation schema
const subscribeSchema = z.object({
  email: z.email().nonempty(),
});

// CSRF protection middleware
const csrfProtection = async (c: Context<{ Bindings: WorkerEnv }>, next: Next) => {
  const requestedWith = c.req.header('X-Requested-With');
  const origin = c.req.header('Origin');
  const referer = c.req.header('Referer');

  if (!requestedWith || requestedWith !== 'XMLHttpRequest' || !isAllowedOrigin(origin) || !isAllowedOrigin(referer)) {
    return c.json(
      {
        success: false,
        message: 'Invalid request',
      },
      403
    );
  }

  await next();
};

// Public files endpoint with CORS and security headers
app.use(
  '/files/*',
  cors({
    origin: (origin) => (isAllowedOrigin(origin) ? origin : ''),
    allowMethods: ['GET', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Range'],
  })
);

app.get(
  '/files/:filename',
  // csrfProtection,
  async (c) => {
    const { filename } = c.req.param();

    // Basic filename validation to prevent path traversal
    if (!filename || filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return c.text('Invalid filename', 400);
    }

    // Validate file extension (allow only specific file types)
    const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.doc', '.docx', '.mp4'];
    const fileExtension = filename.toLowerCase().substring(filename.lastIndexOf('.'));

    if (!allowedExtensions.includes(fileExtension)) {
      return c.text('File type not allowed', 403);
    }
    console.log(filename);
    try {
      const object = await c.env.PUBLIC_BUCKET.get(filename);

      if (!object || !object.body) {
        return c.text('File not found', 404);
      }

      // Set appropriate MIME type based on file extension
      const mimeTypes: Record<string, string> = {
        '.pdf': 'application/pdf',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.webp': 'image/webp',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.doc': 'application/msword',
        '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        '.mp4': 'video/mp4',
      };

      const contentType = object.httpMetadata?.contentType || mimeTypes[fileExtension] || 'application/octet-stream';

      const headers: Record<string, string> = {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
        'X-Content-Type-Options': 'nosniff',
        // 'Content-Security-Policy': "default-src 'none'; object-src 'none'; frame-ancestors https://urfit-child.com;",
        'Accept-Ranges': 'bytes',
      };

      if (object.size) {
        headers['Content-Length'] = object.size.toString();
      }

      return new Response(object.body, {
        headers,
      });
    } catch (error) {
      console.error('Error serving file:', error);
      return c.text('Internal server error', 500);
    }
  }
);

app.post('/subscribe', csrfProtection, zValidator('json', subscribeSchema), async (c) => {
  const { email } = c.req.valid('json');
  const env = c.env;

  try {
    const { success } = await env.SUBSCRIPTION_RATELIMIT.limit({ key: email });

    if (!success) {
      return c.json(
        {
          success: false,
          message: 'This email has reached the subscription attempt limit. Please try again later.',
        },
        429
      );
    }

    // Send welcome email
    const resend = new Resend(env.RESEND_API_KEY);

    const { data, error } = await resend.contacts.create({
      email,
      audienceId: env.RESEND_AUDIENCE_ID,
    });

    if (!data || error) {
      console.error('Failed to subscribe', error);
      return c.json(
        {
          success: false,
          message: 'Failed to subscribe',
        },
        500
      );
    }

    const { error: emailError } = await resend.emails.send({
      from: 'urFIT-child <no-reply@urfit-child.com>',
      to: email,
      subject: 'Welcome to urFIT-child Research Updates',
      react: <WelcomeEmail />,
    });

    if (emailError) {
      console.error('Failed to send welcome email', emailError);
    }

    return c.json({
      success: true,
      message: 'Successfully subscribed',
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return c.json(
      {
        success: false,
        message: 'Failed to process subscription',
      },
      500
    );
  }
});

export default app;
