// Cloudflare Pages Function: POST /api/contact
// Receives the contact form, validates, and emails it via Resend.
//
// Required Pages env vars (set in Cloudflare dashboard → Settings → Environment variables):
//   RESEND_API_KEY  — from https://resend.com/api-keys
//   TO_EMAIL        — where inquiries should land (e.g. hello@terrieradtech.com)
//   FROM_EMAIL      — verified sender on a domain you own in Resend (e.g. site@terrieradtech.com)

export async function onRequestPost({ request, env }) {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400, cors);
  }

  // Honeypot — bots fill this hidden field; real users never see it.
  if (body.website) return json({ ok: true }, 200, cors);

  const name = (body.name || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const company = (body.company || '').toString().trim();
  const note = (body.note || '').toString().trim();
  const engagement = (body.engagement || '').toString().trim();

  // Server-side validation (mirrors the client, but never trust the client).
  const errors = {};
  if (!name) errors.name = 'Required';
  if (!email) errors.email = 'Required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Looks off';
  if (!note) errors.note = 'Required';
  else if (note.length < 20) errors.note = 'Too short';
  if (note.length > 5000) errors.note = 'Too long';
  if (Object.keys(errors).length) return json({ errors }, 400, cors);

  const subject = `New inquiry — ${name}${company ? ' · ' + company : ''}`;
  const text = [
    `Name:        ${name}`,
    `Email:       ${email}`,
    `Company:     ${company || '—'}`,
    `Engagement:  ${engagement || '—'}`,
    '',
    'Note:',
    note,
  ].join('\n');

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:14px;line-height:1.6;color:#1a1714">
      <h2 style="margin:0 0 16px;font-family:Georgia,serif;font-weight:400">New inquiry</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        <tr><td style="padding:4px 16px 4px 0;color:#888">Name</td><td>${escape(name)}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#888">Email</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#888">Company</td><td>${escape(company) || '—'}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#888">Engagement</td><td>${escape(engagement) || '—'}</td></tr>
      </table>
      <hr style="margin:24px 0;border:0;border-top:1px solid #eee">
      <div style="white-space:pre-wrap">${escape(note)}</div>
    </div>
  `;

  // Send via Resend.
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: [env.TO_EMAIL],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!r.ok) {
    const detail = await r.text();
    console.error('Resend error', r.status, detail);
    return json({ error: 'Could not send. Try again or email us directly.' }, 502, cors);
  }

  return json({ ok: true }, 200, cors);
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...extra },
  });
}

function escape(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
