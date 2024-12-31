import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { Resend } from 'resend';
import { WelcomeEmail } from './emails/WelcomeEmail';
import type { Context, Next } from 'hono';

interface Env {
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
}

const app = new Hono<{ Bindings: Env }>();

// CORS middleware
app.use(
  '/*',
  cors({
    origin: ['https://urfit-child.com'],
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
  
  if (!requestedWith || requestedWith !== 'XMLHttpRequest') {
    return c.json(
      {
        success: false,
        message: 'Invalid request origin',
      },
      403
    );
  }

  await next();
};

app.post('/subscribe', csrfProtection, zValidator('json', subscribeSchema), async (c) => {
  const { email } = c.req.valid('json');
  const env = c.env;
  console.log('Received subscription request:', { email });

  try {
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

    await resend.emails.send({
      from: 'urFIT-child <no-reply@urfit-child.com>',
      to: email,
      subject: 'Welcome to urFIT-child Research Updates',
      react: <WelcomeEmail />,
    });

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
