import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import type { Context, Next } from 'hono';
import { cors } from 'hono/cors';
import { Resend } from 'resend';
import { z } from 'zod';

// import { WelcomeEmail } from './emails/WelcomeEmail';

interface Env {
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
  SUBSCRIPTION_RATELIMIT: {
    limit: (options: { key: string }) => Promise<{ success: boolean }>;
  };
}

const app = new Hono<{ Bindings: Env }>();

// CORS middleware
app.use(
  '/*',
  cors({
    origin: ['https://urfit-child.pages.dev', 'https://urfit-child.com'],
    allowMethods: ['POST', 'OPTIONS'],
  })
);

// Validation schema
const subscribeSchema = z.object({
  email: z.string().email().nonempty(),
});

// CSRF protection middleware
const csrfProtection = async (c: Context<{ Bindings: Env }>, next: Next) => {
  const requestedWith = c.req.header('X-Requested-With');
  const origin = c.req.header('Origin');
  const referer = c.req.header('Referer');

  if (
    !requestedWith ||
    requestedWith !== 'XMLHttpRequest' ||
    !origin ||
    (!origin.endsWith('urfit-child.com') && !origin.endsWith('urfit-child.pages.dev')) ||
    !referer ||
    (!referer.startsWith('https://urfit-child.com') && !referer.startsWith('https://urfit-child.pages.dev'))
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

// app.post('/subscribe', zValidator('json', subscribeSchema), async (c) => {
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

    // const { error: emailError } = await resend.emails.send({
    //   from: 'urFIT-child <no-reply@urfit-child.com>',
    //   to: email,
    //   subject: 'Welcome to urFIT-child Research Updates',
    //   react: <WelcomeEmail />,
    // });

    // if (emailError) {
    //   console.error('Failed to send welcome email', emailError);
    // }

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
