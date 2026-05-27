// Home page — Editorial direction, made functional.

function Home() {
  useSmoothAnchors();

  const services = [
    { id: 'strategy',     n: '01', title: 'Product Strategy',
      desc: 'Roadmap design, monetization architecture, and platform vision tied to revenue outcomes you can measure.' },
    { id: 'system',       n: '02', title: 'System Design',
      desc: 'Ad serving, auction, targeting, measurement — designed to scale and survive the next three platform shifts.' },
    { id: 'engineering',  n: '03', title: 'Engineering',
      desc: 'Implementation partners. Prototype to production. We write code, ship features, and stay accountable.' },
    { id: 'data',         n: '04', title: 'Data Science',
      desc: 'Ranking, pacing, attribution, and rigorous experimentation — the part most teams underinvest in.' },
  ];

  const articles = [
    { n: '01', topic: 'A/B Testing', t: 'Relevant and non-relevant users in A/B-testing.', date: 'May 2024',    read: '8 min', url: 'https://medium.com/@larshirsch' },
    { n: '02', topic: 'Ranking',     t: 'Why graph-cluster designs keep winning in ads ranking.', date: 'Placeholder', read: '— min', url: 'https://medium.com/@larshirsch' },
    { n: '03', topic: 'Auction',     t: 'Auctions for retail media: what most teams get wrong.',  date: 'Placeholder', read: '— min', url: 'https://medium.com/@larshirsch' },
    { n: '04', topic: 'Attribution', t: 'Attribution after the cookie: a practical playbook.',    date: 'Placeholder', read: '— min', url: 'https://medium.com/@larshirsch' },
  ];

  return (
    <div className="tat-root home">
      <SiteNav active="work" />

      <section className="hero" id="work">
        <h1>
          Adtech that <span className="ital">earns</span> its keep.
        </h1>
        <div className="hero-side">
          <div className="meta">Issue 01 — Adtech, deliberately</div>
          <p className="lede">
            We help large retail, travel, and media companies build and optimize the platforms that power their ad revenue — from product strategy to data science.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
            <a className="btn" href="contact.html" style={{ padding: '10px 18px', fontSize: 13, textDecoration: 'none' }}>
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      <div className="strip">
        <span className="dot" />
        <span>Built by leaders from</span>
        <span className="pill">Google</span>
        <span className="pill">Amazon</span>
        <span className="pill">Snap</span>
        <span className="pill">Microsoft</span>
        <span style={{ flex: 1 }} />
        <span>Serving US · Europe · Latin America · Asia</span>
      </div>

      <section className="clients" id="clients">
        <div className="clients-head">
          <span className="eyebrow">Selected clients</span>
          <span className="note">A small portfolio. Each one a long engagement.</span>
        </div>
        <div className="clients-grid">
          <div className="logo-cell"><img src="logos/justeat.webp" alt="Just Eat Takeaway" /></div>
          <div className="logo-cell"><img src="logos/emag.png" alt="eMAG" /></div>
          <div className="logo-cell"><img src="logos/allegro.webp" alt="Allegro" /></div>
          <div className="logo-cell"><img src="logos/mercadolibre.webp" alt="Mercado Libre" /></div>
          <div className="logo-cell"><img src="logos/pacvue.webp" alt="Pacvue" /></div>
          <div className="logo-cell"><img src="logos/topsort.webp" alt="Topsort" /></div>
        </div>
      </section>

      <section className="manifesto" id="approach">
        <div className="col">
          <div>
            <div className="eyebrow">A note from us</div>
          </div>
          <div>
            <h2>
              <span className="drop">A</span>
              dtech is a long game played in short deadlines. The teams that win compound — they pick the right bets, ship them well, and build platforms that keep paying out years later. That's the work we like, and that's the work we're built for.
            </h2>
            <p style={{ marginTop: 32, fontSize: 17, color: 'var(--muted)', maxWidth: 720 }}>
              We've spent careers inside Google, Amazon, Snap, and Microsoft, designing the systems behind some of the largest ad businesses in the world. Now we bring that craft to teams who'd rather hire one tenacious partner than fifteen confused vendors.
            </p>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-head">
          <div>
            <div className="eyebrow">Services</div>
            <h2 style={{ marginTop: 12 }}>Four practices.<br />One end-to-end engagement.</h2>
          </div>
          <div style={{ alignSelf: 'end' }}>
            <p>From the first conversation through production rollout — we cover the full distance, or pair tightly with one piece of it.</p>
          </div>
        </div>

        {services.map((s) => (
          <a key={s.n} className="service-row" href={`services.html#${s.id}`}>
            <div className="num">{s.n}</div>
            <div className="title">{s.title}</div>
            <div className="desc">{s.desc}</div>
            <div className="arrow">→</div>
          </a>
        ))}
      </section>

      <section className="process">
        <div className="process-head">
          <div>
            <div className="eyebrow">How we work</div>
            <h2 style={{ marginTop: 14 }}>Three phases. Roughly twelve weeks. Then we get out of the way.</h2>
          </div>
        </div>
        <div className="process-grid">
          <div className="pcard">
            <div className="step">Phase 01 · Assess</div>
            <h3>Understand the system as it is.</h3>
            <p>We read your stack, your product, your org. We surface strengths to lean on and risks to retire — fast, in writing, with receipts.</p>
            <div className="duration">~ 2 weeks</div>
          </div>
          <div className="pcard">
            <div className="step">Phase 02 · Strategize</div>
            <h3>Frame measurable bets.</h3>
            <p>Together we build a strategy with clear objectives and a sequenced roadmap — short-term wins beside long-term platform plays.</p>
            <div className="duration">~ 3 weeks</div>
          </div>
          <div className="pcard">
            <div className="step">Phase 03 · Execute</div>
            <h3>Ship side-by-side.</h3>
            <p>Hands-on prioritization, sequencing, and building. Concrete guidance on monetization, campaign performance, and engagement.</p>
            <div className="duration">~ 7+ weeks</div>
          </div>
        </div>
      </section>

      <section className="writing" id="writing">
        <div className="writing-head">
          <div>
            <div className="eyebrow">Writing</div>
            <h2 style={{ marginTop: 14 }}>Notes from inside the stack.</h2>
          </div>
          <a href="https://medium.com/@larshirsch" target="_blank" rel="noopener" className="all">All articles on Medium →</a>
        </div>
        <div className="writing-list">
          {articles.map((a) => (
            <a key={a.n} className="article" href={a.url} target="_blank" rel="noopener">
              <div className="num">{a.n}</div>
              <div className="title">{a.t}</div>
              <div className="topic">{a.topic}</div>
              <div className="meta">{a.date} · {a.read}</div>
              <div className="arrow">→</div>
            </a>
          ))}
        </div>
      </section>

      <section className="team" id="founder">
        <div className="team-head">
          <div className="eyebrow">The team</div>
          <h2 style={{ marginTop: 14 }}>Two operators. <em>Twenty years</em> at the bench, each.</h2>
        </div>

        <div className="team-grid">
          <article className="member">
            <div className="portrait portrait-lars" />
            <div className="member-body">
              <div className="eyebrow">Founder · Lars Hirsch</div>
              <h3>Product, applied science, and engineering leadership.</h3>
              <p className="bio">
                Built and led ads teams at Google, Amazon, Snap, and Microsoft. Pioneered graph-cluster designs that delivered significant revenue growth and have since been widely adopted across the industry.
              </p>
              <div className="credits">
                <span>M.S. CS / Machine Learning · Georgia Tech</span>
                <span>MBA · Cornell</span>
              </div>
            </div>
          </article>

          <article className="member">
            <div className="portrait portrait-ram" />
            <div className="member-body">
              <div className="eyebrow">Partner & Principal Engineer · Ram</div>
              <h3>System design, engineering, and platform strategy.</h3>
              <p className="bio">
                Two decades shipping ad-serving, auction, and measurement systems at hyperscale. Engineering leadership across retail media, social, and search platforms — the kind of operator clients lean on when the architecture has to outlive the quarter.
              </p>
              <div className="credits">
                <span>Engineering leadership · Big Tech</span>
                <span>Ad systems · Platforms · Scale</span>
              </div>
            </div>
          </article>
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a className="btn ghost" href="about.html" style={{ textDecoration: 'none' }}>
            Read the full bios →
          </a>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="eyebrow">Get in touch</div>
        <h2 style={{ marginTop: 18 }}>Tell us what you're <em>chasing</em>.</h2>
        <p>A short note about your platform and the shape of the problem. We'll come back within a day with how we'd approach it.</p>
        <div className="row">
          <a className="btn" href="mailto:hello@terrieradtech.com" style={{ textDecoration: 'none' }}>
            hello@terrieradtech.com
          </a>
          <a className="btn ghost" href="contact.html" style={{ textDecoration: 'none' }}>
            Book 30 minutes
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
