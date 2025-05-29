import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import type { Context, Next } from 'hono';
import { cors } from 'hono/cors';
import { Resend } from 'resend';
import { z } from 'zod';
import { NewContactSubmissionEmail } from './emails/NewContactSubmissionEmail';

interface Env {
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
  CONTACT_FORM_RATELIMIT: {
    limit: (options: { key: string }) => Promise<{ success: boolean }>;
  };
  CLOUDFLARE_TURNSTILE_SECRET: string;
}

const app = new Hono<{ Bindings: Env }>();

// CORS middleware
app.use(
  '/*',
  cors({
    // origin: ['http://localhost:4321', 'https://urfit-child.pages.dev', 'https://urfit-child.com'],
    origin: ['https://cherubim-it.pages.dev', 'https://cherubim-it.com'],
    allowMethods: ['POST', 'OPTIONS'],
  })
);

// Base validation schema
const baseContactFormSchema = {
  username: z.string().nonempty('Name is required'),
  emailAddress: z.string().email('Invalid email address').nonempty('Email is required'),
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
const csrfProtection = async (c: Context<{ Bindings: Env }>, next: Next) => {
  const requestedWith = c.req.header('X-Requested-With');
  const origin = c.req.header('Origin');
  const referer = c.req.header('Referer');

  if (
    !requestedWith ||
    requestedWith !== 'XMLHttpRequest' ||
    // !origin
    !origin ||
    (!origin.endsWith('cherubim-it.com') && !origin.endsWith('cherubim-it.pages.dev')) ||
    !referer ||
    (!referer.startsWith('https://cherubim-it.com') && !referer.startsWith('https://cherubim-it.pages.dev'))
  ) {
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
