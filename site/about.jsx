// About / Team page.

function AboutPage() {
  useSmoothAnchors();

  const larsCareer = [
    ['2023→',  'Terrier AdTech', 'Founder',             'Adtech consulting'],
    ['2020–23','Snap Inc.',      'Director, Ads ML',    'Ranking, auction'],
    ['2017–20','Amazon',         'Principal SDE / Sci', 'Sponsored ads'],
    ['2013–17','Google',         'Senior Eng Lead',     'Ads serving'],
    ['2009–13','Microsoft',      'Eng Lead',            'Bing ads'],
  ];

  const ramCareer = [
    ['2023→',  'Terrier AdTech', 'Partner & Principal Engineer', 'Adtech consulting'],
    ['—',      'Big Tech',       'Engineering Leader',  'Ad systems at scale'],
    ['—',      'Big Tech',       'Principal Engineer',  'Auction & serving'],
    ['—',      'Big Tech',       'Tech Lead',           'Platforms'],
  ];

  return (
    <div className="tat-root about-page">
      <SiteNav active="about" />

      <section className="intro">
        <div>
          <span className="eyebrow">Founder · 01</span>
          <h1>Lars Hirsch.</h1>
          <p className="lede">
            A seasoned tech leader who has spent two decades inside the platforms that shaped modern adtech.
          </p>
          <p className="body">
            Lars led Product, Applied Science, and Engineering at Google, Amazon, Snap, and Microsoft. He pioneered several innovations — including graph-cluster based designs — that not only delivered significant ad revenue growth, but became widely recognized and adopted across the industry.
          </p>
          <p className="body">
            He started Terrier AdTech in 2023 to bring that craft, end-to-end, to a small handful of teams a year — the kind of partner he would have wanted to hire when running an adtech org.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
            <a className="btn" href="contact.html" style={{ textDecoration: 'none' }}>Start a conversation</a>
            <a className="btn ghost" href="https://www.linkedin.com/in/larshirsch" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>LinkedIn →</a>
          </div>
        </div>
        <div className="portrait" />
      </section>

      <section className="career">
        <span className="eyebrow">Lars · Career</span>
        <div className="career-head">
          <span>Year</span><span>Company</span><span>Role</span><span>Domain</span>
        </div>
        {larsCareer.map((row, i) => (
          <div key={i} className="career-row">
            <span className="yr">{row[0]}</span>
            <span className="co">{row[1]}</span>
            <span className="role">{row[2]}</span>
            <span className="domain">{row[3]}</span>
          </div>
        ))}
        <div style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.08em' }}>
          * Roles shown for context — placeholder dates pending Lars's confirmation.
        </div>
      </section>

      <section className="extras">
        <div>
          <span className="eyebrow">Lars · Education</span>
          <div className="item">
            <h3>Georgia Tech</h3>
            <p>M.S. Computer Science, specialization in Machine Learning</p>
          </div>
          <div className="item">
            <h3>Cornell University</h3>
            <p>MBA</p>
          </div>
        </div>
        <div>
          <span className="eyebrow">Lars · Selected work</span>
          <div className="item" style={{ borderTop: '1px solid var(--line)' }}>
            <p style={{ marginTop: 0, fontSize: 14, color: 'var(--ink-2)' }}>
              Pioneered graph-cluster based designs in ads ranking — adopted across multiple major platforms. Led major monetization launches at Snap and Amazon. Significant published patents in auction theory and ML serving.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────── Ram ──────────── */}
      <section className="intro intro-flip" id="ram">
        <div className="portrait portrait-ram" />
        <div>
          <span className="eyebrow">Partner & Principal Engineer · 02</span>
          <h1>Ram.</h1>
          <p className="lede">
            An engineering leader who has spent his career designing the ad systems that show up on your phone every day.
          </p>
          <p className="body">
            Ram brings two decades of system design, engineering leadership, and platform strategy from inside hyperscale ad businesses. He's the operator clients lean on when the architecture has to outlive the quarter — the kind of partner who pairs deep technical chops with a real instinct for what teams will actually ship.
          </p>
          <p className="body">
            At Terrier he leads the technical work end-to-end: from system reference architectures and capacity models to hands-on engineering with client teams.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
            <a className="btn" href="contact.html" style={{ textDecoration: 'none' }}>Start a conversation</a>
          </div>
        </div>
      </section>

      <section className="career">
        <span className="eyebrow">Ram · Career</span>
        <div className="career-head">
          <span>Year</span><span>Company</span><span>Role</span><span>Domain</span>
        </div>
        {ramCareer.map((row, i) => (
          <div key={i} className="career-row">
            <span className="yr">{row[0]}</span>
            <span className="co">{row[1]}</span>
            <span className="role">{row[2]}</span>
            <span className="domain">{row[3]}</span>
          </div>
        ))}
        <div style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.08em' }}>
          * Detailed background pending Ram's confirmation.
        </div>
      </section>

      <section className="extras">
        <div>
          <span className="eyebrow">Ram · Expertise</span>
          <div className="item">
            <h3>System design</h3>
            <p>Ad serving, auction mechanics, targeting, and measurement — built to scale and survive platform shifts.</p>
          </div>
          <div className="item">
            <h3>Engineering leadership</h3>
            <p>Prototype to production. Code review, technical roadmaps, and hands-on partnership with client teams.</p>
          </div>
        </div>
        <div>
          <span className="eyebrow">Ram · Selected work</span>
          <div className="item" style={{ borderTop: '1px solid var(--line)' }}>
            <p style={{ marginTop: 0, fontSize: 14, color: 'var(--ink-2)' }}>
              Led architectural rewrites of ad-serving infrastructure at multiple hyperscale platforms. Contributor to internal standards on auction design and pacing. Hands-on mentor to dozens of senior engineers now leading ads teams across the industry.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AboutPage />);
