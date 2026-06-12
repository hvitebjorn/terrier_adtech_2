// Worker entry point.
//
// Cloudflare serves matching files in site/ as static assets automatically.
// Anything that doesn't map to a file reaches this Worker — we handle the
// contact form here and hand everything else back to the static assets.
//
// The contact handler lives in functions/api/contact.js (originally a Pages
// Function). Its onRequestPost({ request, env }) / onRequestOptions() exports
// work unchanged here.
//
// Required secrets (set via `wrangler secret put <NAME>` or the dashboard →
// Settings → Variables and Secrets): RESEND_API_KEY, TO_EMAIL, FROM_EMAIL.

import { onRequestPost, onRequestOptions } from '../functions/api/contact.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method === 'POST') return onRequestPost({ request, env });
      if (request.method === 'OPTIONS') return onRequestOptions();
      return new Response('Method Not Allowed', { status: 405 });
    }

    // Not the API route — serve the static site.
    return env.ASSETS.fetch(request);
  },
};
