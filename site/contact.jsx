// Contact page — real form with validation, persistence, and submit state.

const STORAGE_KEY = 'terrier_contact_draft_v1';
const ENGAGEMENTS = ['Strategy', 'System design', 'Engineering', 'Data science', 'Not sure yet'];

// "Next slot" — the quarter after the current one, rolling into the next year as needed.
function nextQuarterLabel(now = new Date()) {
  const q = Math.floor(now.getMonth() / 3) + 1; // current quarter, 1–4
  const nextQ = q === 4 ? 1 : q + 1;
  const year = q === 4 ? now.getFullYear() + 1 : now.getFullYear();
  return `Q${nextQ} ${year}`;
}

function ContactPage() {
  useSmoothAnchors();

  // Restore draft from localStorage so accidental refresh doesn't lose typing.
  const initial = React.useMemo(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { name: '', email: '', company: '', note: '', engagement: 'Not sure yet' };
  }, []);

  const [form, setForm] = React.useState(initial);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('idle'); // idle | submitting | success

  React.useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(form)); } catch (e) {}
  }, [form]);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Required';
    if (!form.email.trim()) er.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = 'Looks off';
    if (!form.note.trim()) er.note = 'Tell us a little about it';
    else if (form.note.trim().length < 20) er.note = 'A bit more, please';
    return er;
  };

  const [submitError, setSubmitError] = React.useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length) { setErrors(er); return; }
    setSubmitError(null);
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.errors) { setErrors(data.errors); setStatus('idle'); return; }
        throw new Error(data.error || 'Send failed');
      }
      setStatus('success');
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    } catch (err) {
      setSubmitError(err.message || 'Could not send. Try again or email us directly.');
      setStatus('idle');
    }
  };

  return (
    <div className="tat-root contact-page">
      <SiteNav active="contact" />

      <section className="wrap">
        <div className="info">
          <span className="eyebrow">Get in touch</span>
          <h1>Tell us what <em>you're chasing.</em></h1>
          <p className="lede">
            A short note about your platform and the shape of the problem. We'll come back within a day with how we'd approach it.
          </p>

          <div className="reach">
            <span className="eyebrow">Or reach out directly</span>
            <div className="reach-grid">
              <div>
                <div className="label">Email</div>
                <a className="val" href="mailto:hello@terrieradtech.com">hello@terrieradtech.com</a>
              </div>
              <div>
                <div className="label">LinkedIn</div>
                <a className="val" href="https://www.linkedin.com/in/larshirsch" target="_blank" rel="noopener">/in/larshirsch</a>
              </div>
              <div>
                <div className="label">Reply time</div>
                <div className="val">≤ 24 hours</div>
              </div>
              <div>
                <div className="label">Next slot</div>
                <div className="val">{nextQuarterLabel()}</div>
              </div>
            </div>
          </div>
        </div>

        {status === 'success' ? (
          <div className="success" role="status" aria-live="polite">
            <div className="check">✓</div>
            <h3>Thanks — note received.</h3>
            <p>
              We read every inquiry personally. Lars or someone on the team will come back within a business day with how we'd approach the work.
            </p>
            <a className="btn" href="index.html"
              style={{ marginTop: 28, background: 'var(--ink)', borderColor: 'var(--ink)', textDecoration: 'none' }}>
              ← Back to the site
            </a>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <span className="eyebrow">Project inquiry</span>

            {/* Honeypot — hidden from humans, catches bots. */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off"
              value={form.website || ''} onChange={set('website')}
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              aria-hidden="true" />

            <ContactField label="Your name" k="name" value={form.name} onChange={set('name')}
              placeholder="Jane Doe" error={errors.name} />
            <ContactField label="Work email" k="email" value={form.email} onChange={set('email')}
              placeholder="jane@company.com" type="email" error={errors.email} />
            <ContactField label="Company" k="company" value={form.company} onChange={set('company')}
              placeholder="Acme Travel" />
            <ContactField label="What are you working on?" k="note" value={form.note} onChange={set('note')}
              placeholder="Building auction-based sponsored listings for our marketplace…"
              textarea error={errors.note} />

            <div className="field" style={{ marginTop: 24 }}>
              <label>Engagement</label>
              <div className="chips">
                {ENGAGEMENTS.map((t) => (
                  <button type="button" key={t}
                    className={'chip' + (form.engagement === t ? ' on' : '')}
                    onClick={() => setForm((f) => ({ ...f, engagement: t }))}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {submitError && (
              <div role="alert" style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 12, color: '#b1442e' }}>
                {submitError}
              </div>
            )}

            <button type="submit" className="btn submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send the note →'}
            </button>
          </form>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}

function ContactField({ label, k, value, onChange, placeholder, type, textarea, error }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className={'field' + (error ? ' error' : '')}>
      <label htmlFor={`f-${k}`}>{label}</label>
      <Tag id={`f-${k}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type || 'text'}
        rows={textarea ? 4 : undefined}
      />
      {error && <div className="err">{error}</div>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage />);
