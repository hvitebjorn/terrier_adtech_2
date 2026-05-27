// Inner pages for the Editorial direction — Services detail, About, Contact.
// Compact mockups (1200×900) used as artboards on the canvas.

function PageServices() {
  return (
    <div className="tat-root v-edit" style={{ width: '100%', height: '100%', overflow: 'auto', background: 'var(--paper)' }}>
      <div style={{ padding: 24, borderBottom: '1px solid var(--ink)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo"><TerrierMark /><span>Terrier <span style={{ color: 'var(--muted)' }}>AdTech</span></span></div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Services / 04</div>
      </div>

      <section style={{ padding: '64px 48px 48px', borderBottom: '1px solid var(--ink)' }}>
        <div className="eyebrow">A field guide to</div>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 96, fontWeight: 400, lineHeight: 0.95, letterSpacing: '-0.03em', marginTop: 14 }}>What we actually do.</h1>
        <p style={{ marginTop: 24, fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.5, maxWidth: 720, color: 'var(--ink-2)' }}>
          Most engagements traverse all four practices. Some teams just need one. We pick up where your team needs the most leverage and stay until the system runs without us.
        </p>
      </section>

      {[
        {
          n: '01', t: 'Product Strategy & Management',
          d: 'Roadmaps, monetization architecture, and platform vision tied to revenue outcomes — informed by what actually ships, not what looks good in a deck.',
          tags: ['Roadmaps', 'Monetization', 'Platform vision', 'OKRs', 'Investment cases'],
          out: ['12-month roadmap with sequenced bets', 'Objective tree mapped to revenue', 'Quarterly review cadence', 'Hiring plan to back the plan'],
        },
        {
          n: '02', t: 'System Design',
          d: 'Architecture for ad serving, auction, targeting, and measurement. Built to scale through the next platform shift, not just the next quarter.',
          tags: ['Auction', 'Targeting', 'Serving', 'Measurement', 'Privacy'],
          out: ['System reference architecture', 'Capacity & cost models', 'Migration playbook', 'Latency & reliability budgets'],
        },
        {
          n: '03', t: 'Engineering',
          d: 'Implementation partners. We move with your team from prototype to production-grade systems — accountable for the ship, not just the slide.',
          tags: ['Prototyping', 'Production hardening', 'Code review', 'Tech leadership'],
          out: ['Working production systems', 'Test & deploy harness', 'Operational runbooks', 'Knowledge transfer to your team'],
        },
        {
          n: '04', t: 'Data Science',
          d: 'Ranking, pacing, attribution, and rigorous experimentation — the part most teams underinvest in until it costs them ten percent of revenue.',
          tags: ['Ranking', 'Pacing', 'Attribution', 'Causal inference', 'A/B'],
          out: ['Modeling pipelines', 'Experiment platform review', 'Attribution methodology', 'Inference & drift monitoring'],
        },
      ].map((s) => (
        <div key={s.n} style={{ padding: '64px 48px', borderBottom: '1px solid var(--line)', display: 'grid', gridTemplateColumns: '120px 1fr 360px', gap: 48, alignItems: 'start' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.14em', color: 'var(--terra)' }}>{s.n}</div>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05 }}>{s.t}</h2>
            <p style={{ marginTop: 18, fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 640 }}>{s.d}</p>
            <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {s.tags.map((t) => (
                <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-2)', padding: '5px 10px', border: '1px solid var(--line)', borderRadius: 999 }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--cream)', padding: 24, borderRadius: 4 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Typical outputs</div>
            <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none' }}>
              {s.out.map((o) => (
                <li key={o} style={{ padding: '8px 0', borderTop: '1px dashed var(--line)', fontSize: 14, color: 'var(--ink-2)' }}>— {o}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <section style={{ padding: '80px 48px', textAlign: 'center', background: 'var(--ink)', color: 'var(--paper)' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 56, fontWeight: 400, lineHeight: 1 }}>Not sure which you need? <em style={{ color: 'var(--terra)' }}>Start with a call.</em></h2>
        <button className="btn" style={{ marginTop: 28, background: 'var(--terra)', borderColor: 'var(--terra)' }}>Book 30 minutes →</button>
      </section>
    </div>
  );
}

function PageAbout() {
  return (
    <div className="tat-root v-edit" style={{ width: '100%', height: '100%', overflow: 'auto', background: 'var(--paper)' }}>
      <div style={{ padding: 24, borderBottom: '1px solid var(--ink)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo"><TerrierMark /><span>Terrier <span style={{ color: 'var(--muted)' }}>AdTech</span></span></div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>About</div>
      </div>

      <section style={{ padding: '72px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
        <div>
          <div className="eyebrow">The founder</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 84, fontWeight: 400, lineHeight: 0.95, letterSpacing: '-0.03em', marginTop: 14 }}>
            Lars Hirsch.
          </h1>
          <p style={{ marginTop: 28, fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.5, color: 'var(--ink-2)' }}>
            A seasoned tech leader who has spent two decades inside the platforms that shaped modern adtech.
          </p>
          <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            Lars led Product, Applied Science, and Engineering at Google, Amazon, Snap, and Microsoft. He pioneered several innovations — including graph-cluster based designs — that not only delivered significant ad revenue growth, but became widely recognized and adopted across the industry.
          </p>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            He started Terrier AdTech in 2023 to bring that craft, end-to-end, to a small handful of teams a year — the kind of partner he would have wanted to hire when running an adtech org.
          </p>
        </div>
        <div style={{ aspectRatio: '4/5', backgroundImage: 'repeating-linear-gradient(135deg, #ddd1bd, #ddd1bd 12px, #e8dec8 12px, #e8dec8 24px)', position: 'relative', borderRadius: 2 }}>
          <div style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', color: 'var(--muted-2)' }}>PORTRAIT — Lars Hirsch, founder</div>
        </div>
      </section>

      <section style={{ padding: '64px 48px', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="eyebrow">Career</div>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '120px 1fr 1fr 200px', gap: 24, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', paddingBottom: 12, borderBottom: '1px solid var(--ink)' }}>
          <span>Year</span><span>Company</span><span>Role</span><span>Domain</span>
        </div>
        {[
          ['2023→', 'Terrier AdTech', 'Founder', 'Adtech consulting'],
          ['2020–23', 'Snap Inc.', 'Director, Ads ML', 'Ranking, auction'],
          ['2017–20', 'Amazon', 'Principal SDE / Sci', 'Sponsored ads'],
          ['2013–17', 'Google', 'Senior Eng Lead', 'Ads serving'],
          ['2009–13', 'Microsoft', 'Eng Lead', 'Bing ads'],
        ].map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 200px', gap: 24, padding: '20px 0', borderBottom: '1px solid var(--line)', alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--terra)' }}>{row[0]}</span>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{row[1]}</span>
            <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>{row[2]}</span>
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>{row[3]}</span>
          </div>
        ))}
        <div style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.08em' }}>* Roles shown for context — placeholder dates pending Lars's confirmation.</div>
      </section>

      <section style={{ padding: '72px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div>
          <div className="eyebrow">Education</div>
          <div style={{ marginTop: 24, padding: '20px 0', borderTop: '1px solid var(--line)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24 }}>Georgia Tech</h3>
            <p style={{ marginTop: 6, color: 'var(--muted)' }}>M.S. Computer Science, specialization in Machine Learning</p>
          </div>
          <div style={{ padding: '20px 0', borderTop: '1px solid var(--line)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24 }}>Cornell University</h3>
            <p style={{ marginTop: 6, color: 'var(--muted)' }}>MBA</p>
          </div>
        </div>
        <div>
          <div className="eyebrow">Selected work</div>
          <div style={{ marginTop: 24, padding: '20px 0', borderTop: '1px solid var(--line)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.7 }}>
            Pioneered graph-cluster based designs in ads ranking — adopted across multiple major platforms. Led major monetization launches at Snap and Amazon. Significant published patents in auction theory and ML serving.
          </div>
        </div>
      </section>
    </div>
  );
}

function PageContact() {
  return (
    <div className="tat-root v-edit" style={{ width: '100%', height: '100%', overflow: 'auto', background: 'var(--cream)' }}>
      <div style={{ padding: 24, borderBottom: '1px solid var(--ink)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo"><TerrierMark /><span>Terrier <span style={{ color: 'var(--muted)' }}>AdTech</span></span></div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Contact</div>
      </div>

      <section style={{ padding: '72px 48px', display: 'grid', gridTemplateColumns: '1fr 480px', gap: 64 }}>
        <div>
          <div className="eyebrow">Get in touch</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 96, fontWeight: 400, lineHeight: 0.95, letterSpacing: '-0.03em', marginTop: 14 }}>
            Tell us what <em style={{ color: 'var(--terra)', fontStyle: 'italic' }}>you're chasing.</em>
          </h1>
          <p style={{ marginTop: 24, fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: 560 }}>
            A short note about your platform and the shape of the problem. We'll come back within a day with how we'd approach it.
          </p>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
            <div className="eyebrow">Or reach out directly</div>
            <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 520 }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Email</div>
                <div style={{ marginTop: 6, fontFamily: 'var(--serif)', fontSize: 20 }}>hello@terrieradtech.com</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>LinkedIn</div>
                <div style={{ marginTop: 6, fontFamily: 'var(--serif)', fontSize: 20 }}>/in/larshirsch</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Reply time</div>
                <div style={{ marginTop: 6, fontFamily: 'var(--serif)', fontSize: 20 }}>≤ 24 hours</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Next slot</div>
                <div style={{ marginTop: 6, fontFamily: 'var(--serif)', fontSize: 20 }}>Q3 2026</div>
              </div>
            </div>
          </div>
        </div>

        <form style={{ background: 'var(--paper)', padding: 32, borderRadius: 4, border: '1px solid var(--line)', alignSelf: 'start' }}>
          <div className="eyebrow">Project inquiry</div>
          <Field label="Your name" placeholder="Jane Doe" />
          <Field label="Work email" placeholder="jane@company.com" />
          <Field label="Company" placeholder="Acme Travel" />
          <Field label="What are you working on?" placeholder="Building auction-based sponsored listings for our marketplace…" textarea />
          <div style={{ marginTop: 24 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Engagement</div>
            <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Strategy', 'System design', 'Engineering', 'Data science', 'Not sure yet'].map((t, i) => (
                <span key={t} style={{ fontSize: 13, padding: '8px 14px', borderRadius: 999, border: '1px solid var(--line)', background: i === 4 ? 'var(--ink)' : 'var(--paper)', color: i === 4 ? 'var(--paper)' : 'var(--ink-2)', cursor: 'pointer' }}>{t}</span>
              ))}
            </div>
          </div>
          <button type="button" className="btn" style={{ marginTop: 28, width: '100%', justifyContent: 'center', background: 'var(--terra)', borderColor: 'var(--terra)' }}>Send the note →</button>
        </form>
      </section>
    </div>
  );
}

function Field({ label, placeholder, textarea }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div style={{ marginTop: 20 }}>
      <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>{label}</label>
      <Tag
        placeholder={placeholder}
        rows={textarea ? 4 : undefined}
        style={{
          marginTop: 6, width: '100%', padding: '10px 12px',
          fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--ink)',
          background: 'transparent', border: 0, borderBottom: '1px solid var(--line)',
          outline: 'none', resize: textarea ? 'vertical' : 'none',
        }}
      />
    </div>
  );
}

Object.assign(window, { PageServices, PageAbout, PageContact });
