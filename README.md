This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Email (Brevo HTTP API) setup

We use Brevo (Sendinblue) Transactional Email HTTP API via `fetch` (no SMTP, no Nodemailer).

### 1) Environment variables (.env or .env.local)

Create a local `.env.local` at project root with:

```bash
# Brevo API key (Transactional)
BREVO_API_KEY=YOUR_BREVO_API_KEY

# Sender details (must be verified in Brevo)
MAIL_FROM_EMAIL=no-reply@yourdomain.com
MAIL_FROM_NAME=AlphaTech Systemes

# Destination recipients (comma-separated for multiple)
MAIL_TO=you@example.com
```

Notes:
- Do not prefix with NEXT_PUBLIC_. These are server-only.
- MAIL_FROM_EMAIL must be a verified sender or belong to a verified domain in Brevo.

### 2) What was added/changed

- Server email util: `src/lib/email.ts` (uses Brevo HTTP API)
- API route: `src/app/api/contact/route.ts` (POST)
- Forms wired to POST to `/api/contact`:
  - `src/components/landing-page/ContactSection.tsx`
  - `src/app/contact/page.tsx`

### 3) Local testing

```bash
npm run dev
# open http://localhost:3000/contact and/or the landing page contact section
```

Expected: success message in UI and an email delivered to `MAIL_TO`.

### 4) Deployment

- Add the same env vars to your hosting provider (e.g., Vercel → Project Settings → Environment Variables).
- Ensure the sender is verified in Brevo and domain authentication (SPF/DKIM) is correctly set up for best deliverability.

### Troubleshooting

- 401/403 from Brevo API: check `BREVO_API_KEY` permissions and copy-paste errors.
- 400 from Brevo API: check sender verification, malformed email addresses, or missing required fields.
- Email goes to spam: set up SPF/DKIM on your domain in Brevo; avoid spammy content; use a domain-matching sender.
