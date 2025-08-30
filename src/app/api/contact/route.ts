import { sendContactEmail } from '@/lib/email';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = (body.email || '').toString().trim();
    const message = (body.message || '').toString().trim();

    if (!email || !message) {
      return Response.json({ ok: false, error: 'Email and message are required.' }, { status: 400 });
    }

    const payload = {
      firstName: body.firstName ? String(body.firstName) : undefined,
      name: body.name ? String(body.name) : undefined,
      email,
      message,
      phone: body.phone ? String(body.phone) : undefined,
      country: body.country ? String(body.country) : undefined,
      privacy: typeof body.privacy === 'boolean' ? body.privacy : undefined,
      newsletter: typeof body.newsletter === 'boolean' ? body.newsletter : undefined,
    } as const;

    const messageId = await sendContactEmail(payload);

    return Response.json({ ok: true, messageId });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    console.error('Contact API error:', err);
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
