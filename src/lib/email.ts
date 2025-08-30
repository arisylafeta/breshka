// Brevo HTTP API client using fetch
// Docs: https://developers.brevo.com/docs/send-a-transactional-email

export type ContactPayload = {
  name?: string;
  firstName?: string;
  email: string;
  message: string;
  phone?: string;
  country?: string;
  privacy?: boolean;
  newsletter?: boolean;
};

export async function sendContactEmail(data: ContactPayload) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error('Missing Brevo API key. Set BREVO_API_KEY in your environment.');

  const toEnv = process.env.MAIL_TO;
  if (!toEnv) throw new Error('MAIL_TO is not set');
  const recipients = toEnv
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((email) => ({ email }));

  const fromEmail = process.env.MAIL_FROM_EMAIL || process.env.BREVO_SMTP_USER;
  const fromName = process.env.MAIL_FROM_NAME || 'Website';
  if (!fromEmail) throw new Error('MAIL_FROM_EMAIL is not set (or BREVO_SMTP_USER fallback).');

  const submitterName = data.firstName || data.name || 'Website Visitor';

  const subject = `New contact form submission from ${submitterName}`;

  const html = `
    <h2>New Contact Submission</h2>
    <p><strong>Name:</strong> ${submitterName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
    ${data.country ? `<p><strong>Country:</strong> ${data.country}</p>` : ''}
    ${typeof data.newsletter === 'boolean' ? `<p><strong>Newsletter:</strong> ${data.newsletter ? 'Yes' : 'No'}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${(data.message || '').replace(/\n/g, '<br/>')}</p>
  `;

  const text = `New Contact Submission\n\n` +
    `Name: ${submitterName}\n` +
    `Email: ${data.email}\n` +
    (data.phone ? `Phone: ${data.phone}\n` : '') +
    (data.country ? `Country: ${data.country}\n` : '') +
    (typeof data.newsletter === 'boolean' ? `Newsletter: ${data.newsletter ? 'Yes' : 'No'}\n` : '') +
    `\nMessage:\n${data.message}`;

  const resp = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: { email: fromEmail, name: fromName },
      to: recipients,
      subject,
      htmlContent: `<!doctype html><html><body>${html}</body></html>`,
      textContent: text,
      replyTo: { email: data.email, name: submitterName },
    }),
  });

  if (!resp.ok) {
    const errText = await resp.text().catch(() => '');
    throw new Error(`Brevo API error: ${resp.status} ${resp.statusText} ${errText}`.trim());
  }
  const json = (await resp.json()) as { messageId?: string; messageIds?: string[] };
  return json.messageId || (json.messageIds && json.messageIds[0]) || 'sent';
}
