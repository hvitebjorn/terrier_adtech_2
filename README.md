# Terrier AdTech — Website

Static site (HTML + CSS + in-browser JSX) deployed on Cloudflare Pages, with one Pages Function for the contact form.

## Structure

```
site/                       ← static assets (Cloudflare Pages output directory)
  index.html                ← home (loads home.jsx, shell.jsx, etc.)
  about.html, services.html, contact.html
  *.jsx                     ← React components, transpiled in-browser via Babel
  *.css                     ← styles
  logos/                    ← imagery
functions/
  api/contact.js            ← POST /api/contact (sends via Resend)
DEPLOY.md                   ← Cloudflare + Resend setup
```

## Local dev

```bash
npm i -g wrangler
wrangler pages dev site
```

Set `RESEND_API_KEY`, `TO_EMAIL`, `FROM_EMAIL` in a `.dev.vars` file (gitignored) for the contact form to work locally.

## Deploy

See [DEPLOY.md](./DEPLOY.md).
