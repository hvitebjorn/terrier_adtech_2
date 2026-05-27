// V2 — EDITORIAL REDESIGN
// Confident, modern, magazine-style. Big serif display type, generous
// whitespace, strong column structure. Hero pulls a pull-quote feel.

function VariantEditorial() {
  return (
    <div className="tat-root v-edit" style={{ width: '100%', height: '100%', overflow: 'auto', background: 'var(--paper)' }}>
      <style>{`
        .v-edit { font-size: 16px; line-height: 1.55; }
        .v-edit .nav { display: flex; align-items: center; justify-content: space-between; padding: 24px 64px; position: sticky; top: 0; z-index: 10; background: rgba(250,247,241,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line-soft); }
        .v-edit .nav-c { display: flex; gap: 36px; font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--ink-2); }
        .v-edit .nav-c a:hover { color: var(--terra); }

        /* Hero — masthead style */
        .v-edit .hero {
          padding: 72px 64px 80px;
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 64px;
          align-items: end;
          border-bottom: 1px solid var(--ink);
        }
        .v-edit .hero h1 {
          font-family: var(--serif);
          font-weight: 400;
          font-size: 132px;
          line-height: 0.92;
          letter-spacing: -0.04em;
        }
        .v-edit .hero h1 .ital { font-style: italic; color: var(--terra); }
        .v-edit .hero-side { font-size: 15px; color: var(--ink-2); line-height: 1.55; }
        .v-edit .hero-side .meta { font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.14em; color: var(--muted); margin-bottom: 14px; }
        .v-edit .hero-side .lede { font-family: var(--serif); font-size: 19px; line-height: 1.45; color: var(--ink); }

        /* Marquee strip */
        .v-edit .strip {
          padding: 18px 64px;
          font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--ink); display: flex; gap: 64px; align-items: center; overflow: hidden;
          border-bottom: 1px solid var(--ink);
          background: var(--cream);
        }
        .v-edit .strip .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--terra); flex-shrink: 0; }

        /* Manifesto block */
        .v-edit .manifesto { padding: 120px 64px; max-width: 1200px; }
        .v-edit .manifesto .col { display: grid; grid-template-columns: 220px 1fr; gap: 80px; align-items: start; }
        .v-edit .manifesto h2 { font-family: var(--serif); font-size: 56px; font-weight: 400; line-height: 1.05; letter-spacing: -0.02em; }
        .v-edit .drop {
          float: left; font-family: var(--serif); font-style: italic; color: var(--terra);
          font-size: 92px; line-height: 0.78; padding: 8px 12px 0 0; font-weight: 400;
        }

        /* Services — full-bleed numbered index */
        .v-edit .services {
          border-top: 1px solid var(--ink);
          border-bottom: 1px solid var(--ink);
          background: var(--ink);
          color: var(--paper);
        }
        .v-edit .services-head { padding: 64px 64px 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
        .v-edit .services-head .eyebrow { color: rgba(250,247,241,.5); }
        .v-edit .services-head h2 { font-family: var(--serif); font-size: 44px; font-weight: 400; line-height: 1.1; }
        .v-edit .services-head p { font-size: 15px; color: rgba(250,247,241,.7); max-width: 420px; }
        .v-edit .service-row {
          padding: 36px 64px;
          display: grid; grid-template-columns: 80px 280px 1fr 80px; gap: 32px; align-items: baseline;
          border-top: 1px solid rgba(250,247,241,.14);
          transition: background .2s;
          cursor: pointer;
        }
        .v-edit .service-row:hover { background: rgba(250,247,241,.04); }
        .v-edit .service-row:hover .arrow { color: var(--terra); transform: translateX(4px); }
        .v-edit .service-row .num { font-family: var(--mono); font-size: 12px; color: rgba(250,247,241,.5); }
        .v-edit .service-row .title { font-family: var(--serif); font-size: 36px; font-weight: 400; letter-spacing: -0.02em; }
        .v-edit .service-row .desc { font-size: 14px; color: rgba(250,247,241,.7); line-height: 1.6; }
        .v-edit .service-row .arrow { font-size: 22px; text-align: right; transition: color .2s, transform .2s; color: rgba(250,247,241,.5); }

        /* Process — 3 timed cards */
        .v-edit .process { padding: 120px 64px; }
        .v-edit .process-head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 64px; }
        .v-edit .process-head h2 { font-family: var(--serif); font-size: 56px; font-weight: 400; max-width: 680px; line-height: 1.05; }
        .v-edit .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid var(--line); }
        .v-edit .pcard { padding: 36px 32px 36px 0; border-right: 1px solid var(--line); }
        .v-edit .pcard:last-child { border-right: 0; }
        .v-edit .pcard .step { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--terra); }
        .v-edit .pcard h3 { font-family: var(--serif); font-size: 28px; font-weight: 400; margin-top: 18px; line-height: 1.15; }
        .v-edit .pcard p { margin-top: 16px; font-size: 14px; color: var(--muted); line-height: 1.6; }
        .v-edit .pcard .duration { margin-top: 24px; font-family: var(--mono); font-size: 11px; color: var(--muted); }
        .v-edit .pcard:nth-child(1) { padding-left: 0; }
        .v-edit .pcard:nth-child(2) { padding-left: 32px; }
        .v-edit .pcard:nth-child(3) { padding-left: 32px; }

        /* Founder — editorial portrait */
        .v-edit .founder { padding: 120px 64px; background: var(--cream); border-top: 1px solid var(--line); }
        .v-edit .founder-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .v-edit .portrait { aspect-ratio: 4 / 5; background: var(--cream-2); position: relative; overflow: hidden;
          background-image: repeating-linear-gradient(135deg, #ebe4d6, #ebe4d6 10px, #f4efe6 10px, #f4efe6 20px); }
        .v-edit .portrait::after { content: 'PORTRAIT — Lars Hirsch, Founder'; position: absolute; bottom: 16px; left: 16px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; color: var(--muted-2); }
        .v-edit .founder h2 { font-family: var(--serif); font-size: 56px; font-weight: 400; line-height: 1; letter-spacing: -0.02em; }
        .v-edit .founder h2 em { font-style: italic; color: var(--terra); }
        .v-edit .founder .bio { margin-top: 32px; font-family: var(--serif); font-size: 20px; line-height: 1.5; color: var(--ink-2); }
        .v-edit .founder .credits { margin-top: 28px; font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; color: var(--muted); display: flex; gap: 20px; flex-wrap: wrap; }
        .v-edit .founder .credits span { padding: 6px 10px; border: 1px solid var(--line); border-radius: 999px; }

        /* CTA */
        .v-edit .cta { padding: 140px 64px; text-align: center; }
        .v-edit .cta h2 { font-family: var(--serif); font-size: 96px; font-weight: 400; line-height: 0.95; letter-spacing: -0.03em; }
        .v-edit .cta h2 em { font-style: italic; color: var(--terra); }
        .v-edit .cta p { margin-top: 24px; font-size: 17px; color: var(--muted); max-width: 480px; margin-left: auto; margin-right: auto; }
        .v-edit .cta .row { margin-top: 36px; display: flex; gap: 12px; justify-content: center; }

        /* Footer */
        .v-edit .footer { padding: 56px 64px; border-top: 1px solid var(--ink); background: var(--ink); color: var(--paper); }
        .v-edit .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; align-items: start; }
        .v-edit .footer h4 { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(250,247,241,.5); margin-bottom: 14px; font-weight: 500; }
        .v-edit .footer a, .v-edit .footer p { display: block; font-size: 14px; color: rgba(250,247,241,.85); margin-bottom: 8px; }
        .v-edit .footer .colophon { margin-top: 64px; padding-top: 24px; border-top: 1px solid rgba(250,247,241,.1); display: flex; justify-content: space-between; font-family: var(--mono); font-size: 11px; color: rgba(250,247,241,.5); letter-spacing: 0.06em; }
      `}</style>

      <nav className="nav">
        <div className="logo">
          <TerrierMark />
          <span>Terrier <span style={{ color: 'var(--muted)' }}>AdTech</span></span>
        </div>
        <div className="nav-c">
          <a>Work</a>
          <a>Services</a>
          <a>Approach</a>
          <a>Founder</a>
          <a>Contact</a>
        </div>
        <button className="btn" style={{ padding: '10px 18px', fontSize: 13 }}>Book a call →</button>
      </nav>

      <section className="hero">
        <h1>
          Adtech that <span className="ital">earns</span> its keep.
        </h1>
        <div className="hero-side">
          <div className="meta">Issue 01 — Adtech, deliberately</div>
          <p className="lede">
            We help large retail, travel, and media companies build and optimize the platforms that power their ad revenue — from product strategy to data science.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
            <button className="btn" style={{ padding: '10px 18px', fontSize: 13 }}>Start a conversation</button>
          </div>
        </div>
      </section>

      <div className="strip">
        <span className="dot" />
        <span>Built by leaders from</span>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 18, textTransform: 'none', letterSpacing: 0 }}>Google</span>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 18, textTransform: 'none', letterSpacing: 0 }}>Amazon</span>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 18, textTransform: 'none', letterSpacing: 0 }}>Snap</span>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 18, textTransform: 'none', letterSpacing: 0 }}>Microsoft</span>
        <span style={{ flex: 1 }} />
        <span>Serving US · Europe · Latin America · Asia</span>
      </div>

      <section className="manifesto">
        <div className="col">
          <div>
            <div className="eyebrow">A note from us</div>
          </div>
          <div>
            <h2><span className="drop">A</span>dtech is a long game played in short deadlines. The teams that win compound — they pick the right bets, ship them well, and build platforms that keep paying out years later. That's the work we like, and that's the work we're built for.</h2>
            <p style={{ marginTop: 32, fontSize: 17, color: 'var(--muted)', maxWidth: 720 }}>
              We've spent careers inside Google, Amazon, Snap, and Microsoft, designing the systems behind some of the largest ad businesses in the world. Now we bring that craft to teams who'd rather hire one tenacious partner than fifteen confused vendors.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-head">
          <div>
            <div className="eyebrow">Services</div>
            <h2 style={{ marginTop: 12 }}>Four practices.<br/>One end-to-end engagement.</h2>
          </div>
          <div style={{ alignSelf: 'end' }}>
            <p>From the first conversation through production rollout — we cover the full distance, or pair tightly with one piece of it.</p>
          </div>
        </div>

        {[
          ['01', 'Product Strategy', 'Roadmap design, monetization architecture, and platform vision tied to revenue outcomes you can measure.'],
          ['02', 'System Design', 'Ad serving, auction, targeting, measurement — designed to scale and survive the next three platform shifts.'],
          ['03', 'Engineering', 'Implementation partners. Prototype to production. We write code, ship features, and stay accountable.'],
          ['04', 'Data Science', 'Ranking, pacing, attribution, and rigorous experimentation — the part most teams underinvest in.'],
        ].map(([n, t, d]) => (
          <div className="service-row" key={n}>
            <div className="num">{n}</div>
            <div className="title">{t}</div>
            <div className="desc">{d}</div>
            <div className="arrow">→</div>
          </div>
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

      <section className="writing">
        <style>{`
          .v-edit .writing { padding: 120px 64px; border-top: 1px solid var(--line-soft); }
          .v-edit .writing-head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 56px; gap: 48px; }
          .v-edit .writing-head h2 { font-family: var(--serif); font-size: 56px; font-weight: 400; line-height: 1.05; letter-spacing: -0.025em; max-width: 680px; }
          .v-edit .writing-head .all { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--terra); white-space: nowrap; }
          .v-edit .writing-list { border-top: 1px solid var(--ink); }
          .v-edit .article {
            display: grid; grid-template-columns: 80px 1fr 200px 120px 60px;
            gap: 32px; align-items: baseline;
            padding: 28px 0; border-bottom: 1px solid var(--line);
            transition: padding .15s; cursor: pointer;
          }
          .v-edit .article:hover { padding-left: 12px; }
          .v-edit .article:hover .arrow { color: var(--terra); transform: translateX(4px); }
          .v-edit .article .num { font-family: var(--mono); font-size: 11px; color: var(--muted); letter-spacing: 0.1em; }
          .v-edit .article .title { font-family: var(--serif); font-size: 26px; font-weight: 400; letter-spacing: -0.015em; line-height: 1.2; }
          .v-edit .article .topic { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--terra); }
          .v-edit .article .meta { font-family: var(--mono); font-size: 11px; letter-spacing: 0.06em; color: var(--muted); }
          .v-edit .article .arrow { font-size: 18px; text-align: right; color: var(--muted); transition: color .15s, transform .15s; }
        `}</style>
        <div className="writing-head">
          <div>
            <div className="eyebrow">Writing</div>
            <h2 style={{ marginTop: 14 }}>Notes from inside the stack.</h2>
          </div>
          <a href="https://medium.com/@larshirsch" target="_blank" rel="noopener" className="all">All articles on Medium →</a>
        </div>
        <div className="writing-list">
          {[
            { n: '01', topic: 'A/B Testing', t: 'Relevant and non-relevant users in A/B-testing.', date: 'May 2024', read: '8 min', url: 'https://medium.com/@larshirsch' },
            { n: '02', topic: 'Ranking', t: 'Why graph-cluster designs keep winning in ads ranking.', date: 'Placeholder', read: '— min', url: 'https://medium.com/@larshirsch' },
            { n: '03', topic: 'Auction', t: 'Auctions for retail media: what most teams get wrong.', date: 'Placeholder', read: '— min', url: 'https://medium.com/@larshirsch' },
            { n: '04', topic: 'Attribution', t: 'Attribution after the cookie: a practical playbook.', date: 'Placeholder', read: '— min', url: 'https://medium.com/@larshirsch' },
          ].map((a) => (
            <a key={a.n} className="article" href={a.url} target="_blank" rel="noopener" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="num">{a.n}</div>
              <div className="title">{a.t}</div>
              <div className="topic">{a.topic}</div>
              <div className="meta">{a.date} · {a.read}</div>
              <div className="arrow">→</div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 24, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.06em' }}>
          ⤷ Replace article slugs with the real Medium URLs you'd like to feature.
        </div>
      </section>

      <section className="founder">
        <div className="founder-grid">
          <div className="portrait" />
          <div>
            <div className="eyebrow">The founder</div>
            <h2 style={{ marginTop: 16 }}>Lars Hirsch <em>started Terrier</em> after twenty years at the bench.</h2>
            <p className="bio">
              Product, applied science, and engineering leadership at Google, Amazon, Snap, and Microsoft. He pioneered graph-cluster designs that delivered significant revenue growth and have since been widely adopted across the industry.
            </p>
            <div className="credits">
              <span>M.S. CS / Machine Learning · Georgia Tech</span>
              <span>MBA · Cornell</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="eyebrow">Get in touch</div>
        <h2 style={{ marginTop: 18 }}>Tell us what you're <em>chasing</em>.</h2>
        <p>A short note about your platform and the shape of the problem. We'll come back within a day with how we'd approach it.</p>
        <div className="row">
          <button className="btn">hello@terrieradtech.com</button>
          <button className="btn ghost">Book 30 minutes</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ color: 'var(--paper)', fontSize: 22 }}>
              <TerrierMark size={22} />
              <span>Terrier AdTech</span>
            </div>
            <p style={{ marginTop: 16, color: 'rgba(250,247,241,.6)', maxWidth: 320 }}>An adtech consultancy for retail, travel, and media platforms ready to compound.</p>
          </div>
          <div>
            <h4>Services</h4>
            <a>Product Strategy</a>
            <a>System Design</a>
            <a>Engineering</a>
            <a>Data Science</a>
          </div>
          <div>
            <h4>Company</h4>
            <a>About</a>
            <a>Founder</a>
            <a>Writing</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a>hello@terrieradtech.com</a>
            <a>LinkedIn</a>
          </div>
        </div>
        <div className="colophon">
          <span>© 2026 Terrier AdTech LLC</span>
          <span>Brooklyn · Remote · Worldwide</span>
        </div>
      </footer>
    </div>
  );
}

window.VariantEditorial = VariantEditorial;
