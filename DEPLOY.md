# Deploying the Terrier AdTech site

The site is deployed as a **Cloudflare Worker with static assets**: the static
bundle in `site/` is served directly, and a small Worker (`worker/index.js`)
handles the contact form at `POST /api/contact`. Configuration lives in
`wrangler.jsonc`.

The contact logic itself lives in `functions/api/contact.js` (originally a
Pages Function); the Worker imports its `onRequestPost` / `onRequestOptions`
exports unchanged.

## Deploy

```bash
npm i -g wrangler
wrangler deploy          # run from the repo root
```

`wrangler.jsonc` points `assets.directory` at `site/` and `main` at
`worker/index.js`, so one `wrangler deploy` ships both the static files and the
API route. The Worker is named `terrier-adtech-website-2` — deploys update that
same Worker.

> **Note:** the `functions/` folder convention only works on Cloudflare
> **Pages**. This project is a **Worker**, so the route is wired up explicitly
> in `worker/index.js` instead. A static-only deploy (assets with no `main`)
> will return 404 on `/api/contact`.

## Contact form: Resend setup

The form posts to `/api/contact`, which sends mail via [Resend](https://resend.com).

1. Create a free Resend account.
2. Add and verify your sending domain (e.g. `terrieradtech.com`) — Resend gives
   you DNS records to paste into Cloudflare DNS. Required for emails to actually
   arrive instead of going to spam.
3. Create an API key in Resend.
4. Set the three secrets on the Worker, either via CLI:
   ```bash
   wrangler secret put RESEND_API_KEY   # the key from step 3
   wrangler secret put TO_EMAIL         # where inquiries land, e.g. hello@terrieradtech.com
   wrangler secret put FROM_EMAIL       # a sender on your verified domain, e.g. site@terrieradtech.com
   ```
   …or in the dashboard → **Workers & Pages → your Worker → Settings →
   Variables and Secrets**.
5. Redeploy if you changed code (`wrangler deploy`). Secrets take effect
   immediately without a redeploy.

## Free-tier limits

Resend free tier: 3,000 emails/month, 100/day. Plenty for a consultancy contact
form. Workers free plan: 100k requests/day.

## Local testing

```bash
wrangler dev            # run from the repo root
```

This serves the static site and runs the Worker, so `/api/contact` works
locally. Put the secrets in a `.dev.vars` file at the repo root (git-ignored):

```
RESEND_API_KEY=re_...
[email protected]
[email protected]
```
