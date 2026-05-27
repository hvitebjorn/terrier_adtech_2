# Deploying the Terrier AdTech site

The site is a static bundle in `site/` plus one Cloudflare Pages Function in `functions/api/contact.js` that handles the contact form.

## One-time Cloudflare Pages setup

1. Push this repo to GitHub/GitLab (or use **drag-and-drop** in the Cloudflare dashboard).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - Framework preset: **None**
   - Build command: *(blank)*
   - Build output directory: **`site`**
   - Root directory: *(blank)*
4. The `functions/` folder at the repo root is auto-detected — `functions/api/contact.js` will be served at `/api/contact`.

## Contact form: Resend setup

The form posts to `/api/contact`, which sends mail via [Resend](https://resend.com).

1. Create a free Resend account.
2. Add and verify your sending domain (e.g. `terrieradtech.com`) — Resend gives you DNS records to paste into Cloudflare DNS. Required for emails to actually arrive instead of going to spam.
3. Create an API key in Resend.
4. In the Cloudflare Pages project → **Settings → Environment variables**, add (for both Production and Preview):
   - `RESEND_API_KEY` → the key from step 3
   - `TO_EMAIL` → where inquiries should land, e.g. `hello@terrieradtech.com`
   - `FROM_EMAIL` → a sender on your verified domain, e.g. `site@terrieradtech.com`
5. Redeploy (Cloudflare picks up new env vars on the next build).

## Free-tier limits

Resend free tier: 3,000 emails/month, 100/day. Plenty for a consultancy contact form. Pages Functions: 100k invocations/day on the free plan.

## Local testing

```bash
npm i -g wrangler
wrangler pages dev site
```

The dev server runs Pages Functions and proxies `/api/contact` correctly. Set env vars in a `.dev.vars` file at the repo root:

```
RESEND_API_KEY=re_...
[email protected]
[email protected]
```
