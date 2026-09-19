import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import type { Context, Next } from 'hono';
import { cors } from 'hono/cors';
import { Resend } from 'resend';
import { z } from 'zod';
import { NewContactSubmissionEmail } from './emails/NewContactSubmissionEmail';

type WorkerEnv = Env & {
  RESEND_API_KEY: string;
  CLOUDFLARE_TURNSTILE_SECRET: string;
};

const isAllowedOrigin = (value: string | undefined): boolean => {
  if (!value) return false;

  try {
    const url = new URL(value);
    const isLocal = url.protocol === 'http:' && url.hostname === 'localhost' && url.port === '4321';
    const isProduction = url.protocol === 'https:' && url.hostname === 'cherubim-it.com';
    const isPages =
      url.protocol === 'https:' &&
      (url.hostname === 'cherubim-it.pages.dev' || url.hostname.endsWith('.cherubim-it.pages.dev'));

    return isLocal || isProduction || isPages;
  } catch {
    return false;
  }
};

const app = new Hono<{ Bindings: WorkerEnv }>();

// CORS middleware
app.use(
  '/*',
  cors({
    origin: (origin) => (isAllowedOrigin(origin) ? origin : ''),
    allowMethods: ['POST', 'OPTIONS'],
    allowHeaders: ['X-Requested-With'],
  })
);

// Base validation schema
const baseContactFormSchema = {
  username: z.string().nonempty('Name is required'),
  emailAddress: z.email({ error: 'Invalid email address' }).nonempty('Email is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  role: z.string().optional(),
  cfTurnstileToken: z.string().nonempty('Please complete the verification'),
  emai: z.string().optional(), // ✅ honeypot field (intentionally misspelled)
};

// Validation schema for individual form
const individualFormSchema = z.object({
  ...baseContactFormSchema,
  companyName: z.string().optional(),
  isCompanyForm: z.literal('false'),
});

// Validation schema for company form
const companyFormSchema = z.object({
  ...baseContactFormSchema,
  companyName: z.string().nonempty('Company name is required'),
  isCompanyForm: z.literal('true'),
  role: z.string().optional(),
});

// Combined validation schema
const contactFormSchema = z.union([individualFormSchema, companyFormSchema]);

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

async function verifyTurnstile(token: string, secretKey: string, remoteIp?: string): Promise<boolean> {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: secretKey,
      response: token,
      ...(remoteIp ? { remoteip: remoteIp } : {}),
    }),
  });

  const data: { success: boolean } = await response.json();
  return data.success === true;
}

app.post('/contact', csrfProtection, zValidator('form', contactFormSchema), async (c) => {
  const { username, emailAddress, message, companyName, role, cfTurnstileToken, emai, isCompanyForm } =
    c.req.valid('form');
  const env = c.env;

  try {
    // 🔒 Honeypot trap: if this field is filled, it's likely a bot
    if (emai && emai.trim() !== '') {
      return c.json(
        {
          success: false,
          message: 'Bot detection triggered.',
        },
        400
      );
    }
    const { success } = await env.CONTACT_FORM_RATELIMIT.limit({ key: emailAddress });

    if (!success) {
      return c.json(
        {
          success: false,
          message: 'This email has reached the contact form submission attempt limit. Please try again later.',
        },
        429
      );
    }

    const secretKey = c.env.CLOUDFLARE_TURNSTILE_SECRET; // You'll add this to your environment

    const isTurnstileValid = await verifyTurnstile(cfTurnstileToken, secretKey, c.req.header('CF-Connecting-IP'));

    if (!isTurnstileValid) {
      return c.json(
        {
          success: false,
          message: 'Failed Turnstile verification. Are you human?',
        },
        403
      );
    }

    // Send welcome email
    const resend = new Resend(env.RESEND_API_KEY);

    const { error: emailError } = await resend.emails.send({
      from: 'Cherubim IT <contact@cherubim-it.com>',
      to: 'juhanijuusola@gmail.com',
      subject: 'New Contact Form Submission',
      react: (
        <NewContactSubmissionEmail
          username={username}
          emailAddress={emailAddress}
          message={message}
          companyName={companyName}
          role={role}
          isCompanyForm={isCompanyForm === 'true'}
        />
      ),
    });

    if (emailError) {
      console.error('Failed to send welcome email', emailError);
    }

    return c.json({
      success: true,
      message: 'Successfully sent contact form',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return c.json(
      {
        success: false,
        message: 'Failed to send contact form',
      },
      500
    );
  }
});

export default app;
