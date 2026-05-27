// V1 — SUBTLE REFRESH
// Stays close to the current site's content arrangement. Improvements:
// cleaner typography, better hierarchy, real spacing rhythm, subtle accent.
// Single column with quiet sections. Conservative.

function VariantSubtle() {
  return (
    <div className="tat-root v-subtle" style={{ width: '100%', height: '100%', overflow: 'auto', background: 'var(--paper)' }}>
      <style>{`
        .v-subtle { font-size: 16px; line-height: 1.55; }
        .v-subtle .nav { display: flex; align-items: center; justify-content: space-between; padding: 22px 56px; border-bottom: 1px solid var(--line-soft); position: sticky; top: 0; background: rgba(250,247,241,0.92); backdrop-filter: blur(8px); z-index: 10; }
        .v-subtle .nav-links { display: flex; gap: 32px; font-size: 14px; color: var(--muted); }
        .v-subtle .nav-links a:hover { color: var(--ink); }
        .v-subtle .hero { padding: 96px 56px 72px; max-width: 880px; }
        .v-subtle .hero h1 { font-family: var(--serif); font-size: 62px; line-height: 1.05; font-weight: 400; letter-spacing: -0.025em; }
        .v-subtle .hero h1 em { font-style: italic; color: var(--terra); }
        .v-subtle .hero p { margin-top: 28px; font-size: 19px; color: var(--ink-2); max-width: 640px; }
        .v-subtle .hero-cta { margin-top: 36px; display: flex; gap: 12px; }
        .v-subtle .logos { padding: 32px 56px 80px; display: flex; align-items: center; gap: 40px; flex-wrap: wrap; border-top: 1px solid var(--line-soft); border-bottom: 1px solid var(--line-soft); margin: 0 56px; }
        .v-subtle .logos-label { font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); }
        .v-subtle .logo-pill { font-family: var(--serif); font-size: 18px; color: var(--ink-2); opacity: .75; }
        .v-subtle .section { padding: 96px 56px; max-width: 1100px; }
        .v-subtle .section h2 { font-family: var(--serif); font-size: 36px; font-weight: 400; max-width: 720px; }
        .v-subtle .grid-3 { margin-top: 48px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .v-subtle .card { padding: 28px 0; border-top: 1px solid var(--line); }
        .v-subtle .card-num { font-family: var(--mono); font-size: 11px; color: var(--terra); letter-spacing: 0.08em; }
        .v-subtle .card h3 { margin-top: 16px; font-size: 18px; font-weight: 600; }
        .v-subtle .card p { margin-top: 8px; font-size: 14px; color: var(--muted); line-height: 1.6; }
        .v-subtle .approach { display: grid; grid-template-columns: 200px 1fr; gap: 64px; padding: 24px 0; border-top: 1px solid var(--line); }
        .v-subtle .approach-step { font-family: var(--mono); font-size: 12px; color: var(--muted); }
        .v-subtle .approach h3 { font-family: var(--serif); font-size: 26px; font-weight: 400; }
        .v-subtle .approach p { margin-top: 10px; color: var(--muted); max-width: 560px; }
        .v-subtle .founder { display: grid; grid-template-columns: 280px 1fr; gap: 56px; align-items: start; }
        .v-subtle .portrait { width: 280px; height: 340px; background: var(--cream-2); border-radius: 2px; position: relative; overflow: hidden; }
        .v-subtle .portrait::before { content: 'PORTRAIT — Lars Hirsch'; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: var(--mono); font-size: 10px; color: var(--muted-2); letter-spacing: 0.1em; }
        .v-subtle .portrait { background-image: repeating-linear-gradient(135deg, var(--cream-2), var(--cream-2) 8px, var(--cream) 8px, var(--cream) 16px); }
        .v-subtle .footer { padding: 56px; border-top: 1px solid var(--line); margin-top: 48px; display: flex; justify-content: space-between; align-items: end; }
        .v-subtle .footer .small { font-family: var(--mono); font-size: 11px; color: var(--muted); letter-spacing: 0.06em; }
      `}</style>

      <nav className="nav">
        <div className="logo">
          <TerrierMark />
          <span>Terrier <span style={{ color: 'var(--muted)' }}>AdTech</span></span>
        </div>
        <div className="nav-links">
          <a>Services</a>
          <a>Approach</a>
          <a>About</a>
          <a>Contact</a>
        </div>
        <button className="btn ghost" style={{ padding: '8px 16px', fontSize: 13 }}>Get in touch</button>
      </nav>

      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 28 }}>Adtech consulting · Est. 2023</div>
        <h1>
          We help retail, travel, and media companies <em>hunt down</em> ad revenue growth.
        </h1>
        <p>
          End-to-end product, engineering, and data science for the advertising platforms behind some of the world's largest online businesses.
        </p>
        <div className="hero-cta">
          <button className="btn">Start a conversation</button>
          <button className="btn ghost">See how we work</button>
        </div>
      </section>

      <div className="logos">
        <div className="logos-label">Built by leaders from</div>
        <div className="logo-pill">Google</div>
        <div className="logo-pill">Amazon</div>
        <div className="logo-pill">Snap</div>
        <div className="logo-pill">Microsoft</div>
      </div>

      <section className="section">
        <div className="eyebrow">What we do</div>
        <h2 style={{ marginTop: 12 }}>Four practices, one engagement model — hands-on from ideation to execution.</h2>
        <div className="grid-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="card">
            <div className="card-num">01</div>
            <h3>Product Strategy</h3>
            <p>Roadmaps, monetization design, and platform vision rooted in measurable revenue outcomes.</p>
          </div>
          <div className="card">
            <div className="card-num">02</div>
            <h3>System Design</h3>
            <p>Architecture for ad serving, auction, targeting, and measurement at scale.</p>
          </div>
          <div className="card">
            <div className="card-num">03</div>
            <h3>Engineering</h3>
            <p>Implementation partners — from prototype to production-grade systems.</p>
          </div>
          <div className="card">
            <div className="card-num">04</div>
            <h3>Data Science</h3>
            <p>Ranking, pacing, attribution, and experimentation done right.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--line-soft)' }}>
        <div className="eyebrow">How we work</div>
        <h2 style={{ marginTop: 12, marginBottom: 48 }}>A short engagement, a long impact.</h2>

        <div className="approach">
          <div className="approach-step">Step 01 · Assess</div>
          <div>
            <h3>Understand the system as it is.</h3>
            <p>We start by reading your stack — the product, the tech, the org. We surface strengths to lean on and risks to retire.</p>
          </div>
        </div>
        <div className="approach">
          <div className="approach-step">Step 02 · Strategize</div>
          <div>
            <h3>Frame measurable bets.</h3>
            <p>Together we craft a strategy with clear objectives and a sequenced roadmap — short-term wins beside long-term platform plays.</p>
          </div>
        </div>
        <div className="approach">
          <div className="approach-step">Step 03 · Execute</div>
          <div>
            <h3>Ship side-by-side with your team.</h3>
            <p>We work hands-on — prioritizing, sequencing, building. Specific guidance on monetization, campaign performance, and engagement.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--line-soft)' }}>
        <div className="eyebrow">Founder</div>
        <h2 style={{ marginTop: 12, marginBottom: 48 }}>Led by Lars Hirsch.</h2>
        <div className="founder">
          <div className="portrait" />
          <div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.5, color: 'var(--ink-2)' }}>
              A seasoned tech leader passionate about developing and growing adtech businesses. Lars has led Product, Applied Science, and Engineering at Google, Amazon, Snap, and Microsoft, with a comprehensive understanding of the online advertising stack.
            </p>
            <p style={{ marginTop: 24, color: 'var(--muted)' }}>
              He has pioneered several innovations — including graph-cluster based designs — that delivered significant ad revenue growth and became widely adopted across the industry. M.S. Computer Science (Machine Learning), Georgia Tech. MBA, Cornell University.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="logo" style={{ fontSize: 16 }}>
          <TerrierMark size={18} />
          <span>Terrier AdTech</span>
        </div>
        <div className="small">© 2026 Terrier AdTech LLC · hello@terrieradtech.com</div>
      </footer>
    </div>
  );
}

window.VariantSubtle = VariantSubtle;
