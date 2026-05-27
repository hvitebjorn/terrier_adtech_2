// V4 — DATA-FORWARD / TECHNICAL
// Numbers, charts, and dense technical hierarchy as visual anchors.
// Confident and modern, slightly terminal-tinged, but still warm cream.

function VariantData() {
  return (
    <div className="tat-root v-data" style={{ width: '100%', height: '100%', overflow: 'auto', background: 'var(--paper)' }}>
      <style>{`
        .v-data { font-size: 15px; line-height: 1.55; }
        .v-data .nav { display: flex; align-items: center; justify-content: space-between; padding: 18px 48px; border-bottom: 1px solid var(--ink); position: sticky; top: 0; z-index: 10; background: var(--paper); }
        .v-data .nav-c { display: flex; gap: 32px; font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-2); }
        .v-data .nav-c a:hover { color: var(--terra); }
        .v-data .nav-meta { font-family: var(--mono); font-size: 10px; color: var(--muted); letter-spacing: 0.1em; }

        /* Hero — left text, right data card */
        .v-data .hero { padding: 72px 48px 48px; display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; align-items: end; border-bottom: 1px solid var(--ink); }
        .v-data .hero h1 { font-family: var(--serif); font-weight: 400; font-size: 88px; line-height: 0.96; letter-spacing: -0.03em; }
        .v-data .hero h1 em { font-style: italic; color: var(--terra); }
        .v-data .hero .lede { margin-top: 28px; font-size: 17px; max-width: 540px; color: var(--ink-2); line-height: 1.55; }
        .v-data .hero .row { margin-top: 32px; display: flex; gap: 12px; }

        .v-data .stat-card { background: var(--ink); color: var(--paper); padding: 28px; border-radius: 4px; }
        .v-data .stat-card .head { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(250,247,241,.5); display: flex; justify-content: space-between; }
        .v-data .stat-card .live { display: inline-flex; align-items: center; gap: 6px; }
        .v-data .stat-card .live::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--terra); animation: pulse 1.6s ease-in-out infinite; }
        @keyframes pulse { 50% { opacity: .35; } }
        .v-data .stat-grid { margin-top: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(250,247,241,.1); }
        .v-data .stat-cell { background: var(--ink); padding: 18px 14px; }
        .v-data .stat-cell .v { font-family: var(--serif); font-size: 36px; font-weight: 400; letter-spacing: -0.02em; }
        .v-data .stat-cell .l { font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(250,247,241,.55); margin-top: 4px; }
        .v-data .stat-card .chart { margin-top: 18px; height: 60px; position: relative; }

        /* Logo strip */
        .v-data .strip { padding: 16px 48px; display: flex; align-items: center; gap: 28px; border-bottom: 1px solid var(--ink); font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-2); background: var(--cream); }
        .v-data .strip .pill { padding: 4px 12px; border: 1px solid var(--line); border-radius: 999px; background: var(--paper); }

        /* Services — table */
        .v-data .services { padding: 96px 48px; }
        .v-data .services-head { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; margin-bottom: 48px; align-items: end; }
        .v-data .services-head h2 { font-family: var(--serif); font-size: 56px; font-weight: 400; line-height: 1.05; letter-spacing: -0.025em; }
        .v-data .table { width: 100%; border-collapse: collapse; }
        .v-data .table thead th { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); text-align: left; padding: 12px 16px; border-bottom: 1px solid var(--ink); font-weight: 500; }
        .v-data .table td { padding: 24px 16px; border-bottom: 1px solid var(--line); vertical-align: top; }
        .v-data .table .num { font-family: var(--mono); font-size: 11px; color: var(--terra); width: 60px; }
        .v-data .table .name { font-family: var(--serif); font-size: 26px; font-weight: 400; letter-spacing: -0.01em; width: 280px; }
        .v-data .table .desc { font-size: 14px; color: var(--ink-2); line-height: 1.55; }
        .v-data .table .scope { font-family: var(--mono); font-size: 11px; color: var(--muted); width: 140px; }

        /* Approach diagram */
        .v-data .approach { padding: 96px 48px; background: var(--cream); border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); }
        .v-data .approach h2 { font-family: var(--serif); font-size: 48px; font-weight: 400; max-width: 720px; line-height: 1.05; letter-spacing: -0.02em; }
        .v-data .ap-grid { margin-top: 56px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .v-data .ap { background: var(--paper); padding: 28px; border-radius: 4px; border: 1px solid var(--line); }
        .v-data .ap .label { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--terra); display: flex; justify-content: space-between; }
        .v-data .ap h3 { margin-top: 14px; font-family: var(--serif); font-size: 24px; font-weight: 500; }
        .v-data .ap p { margin-top: 12px; font-size: 14px; color: var(--muted); line-height: 1.6; }
        .v-data .ap .deliv { margin-top: 18px; padding-top: 14px; border-top: 1px dashed var(--line); }
        .v-data .ap .deliv .h { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
        .v-data .ap .deliv ul { margin: 8px 0 0; padding: 0; list-style: none; font-size: 13px; }
        .v-data .ap .deliv li { padding: 4px 0; color: var(--ink-2); }
        .v-data .ap .deliv li::before { content: '— '; color: var(--terra); }

        /* Founder */
        .v-data .founder { padding: 96px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .v-data .founder .portrait { aspect-ratio: 4/5; background-image: repeating-linear-gradient(135deg, var(--cream-2), var(--cream-2) 10px, var(--cream) 10px, var(--cream) 20px); position: relative; }
        .v-data .founder .portrait::after { content: 'PORTRAIT — Lars Hirsch'; position: absolute; bottom: 14px; left: 14px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; color: var(--muted-2); }
        .v-data .founder h2 { font-family: var(--serif); font-size: 48px; font-weight: 400; line-height: 1.05; letter-spacing: -0.02em; }
        .v-data .founder h2 em { font-style: italic; color: var(--terra); }
        .v-data .founder .bio { margin-top: 24px; font-size: 16px; color: var(--ink-2); line-height: 1.65; max-width: 560px; }
        .v-data .founder .stats { margin-top: 32px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding-top: 24px; border-top: 1px solid var(--line); }
        .v-data .founder .stats .v { font-family: var(--serif); font-size: 32px; font-weight: 400; letter-spacing: -0.02em; }
        .v-data .founder .stats .l { font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-top: 4px; }

        /* CTA */
        .v-data .cta { padding: 96px 48px; background: var(--ink); color: var(--paper); border-top: 1px solid var(--ink); }
        .v-data .cta-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 64px; align-items: end; }
        .v-data .cta h2 { font-family: var(--serif); font-size: 72px; font-weight: 400; line-height: 1; letter-spacing: -0.03em; }
        .v-data .cta h2 em { font-style: italic; color: var(--terra); }
        .v-data .cta .terms { font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; color: rgba(250,247,241,.6); line-height: 1.8; }
        .v-data .cta .terms b { color: var(--paper); font-weight: 500; }

        /* Footer */
        .v-data .footer { padding: 24px 48px; display: flex; justify-content: space-between; font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; color: var(--muted); background: var(--ink); color: rgba(250,247,241,.5); border-top: 1px solid rgba(250,247,241,.1); }
      `}</style>

      <nav className="nav">
        <div className="logo">
          <TerrierMark />
          <span>Terrier <span style={{ color: 'var(--muted)' }}>AdTech</span></span>
        </div>
        <div className="nav-c">
          <a>Services</a>
          <a>Approach</a>
          <a>Founder</a>
          <a>Notes</a>
          <a>Contact</a>
        </div>
        <div className="nav-meta">v.2026.05 · Brooklyn → ∞</div>
      </nav>

      <section className="hero">
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Adtech consulting · 2023→</div>
          <h1>The platform team you'd <em>hire if you could.</em></h1>
          <p className="lede">
            We build and optimize advertising platform technologies for retail, travel, and media businesses — the systems behind ad serving, auction, ranking, pacing, attribution, and measurement.
          </p>
          <div className="row">
            <button className="btn">Start a conversation →</button>
            <button className="btn ghost">Read our notes</button>
          </div>
        </div>
        <div className="stat-card">
          <div className="head">
            <span className="live">LIVE METRICS</span>
            <span>Q2 · 2026</span>
          </div>
          <div className="stat-grid">
            <div className="stat-cell">
              <div className="v">22 yrs</div>
              <div className="l">Combined AdTech</div>
            </div>
            <div className="stat-cell">
              <div className="v">4</div>
              <div className="l">FAANG-grade orgs</div>
            </div>
            <div className="stat-cell">
              <div className="v">$1B+</div>
              <div className="l">Revenue impact</div>
            </div>
            <div className="stat-cell">
              <div className="v">4</div>
              <div className="l">Continents served</div>
            </div>
          </div>
          <div className="chart">
            <svg width="100%" height="60" viewBox="0 0 280 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="grad-d" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#c0593a" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#c0593a" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,50 L20,46 L40,42 L60,38 L80,30 L100,32 L120,24 L140,26 L160,18 L180,20 L200,12 L220,14 L240,8 L260,10 L280,4 L280,60 L0,60 Z" fill="url(#grad-d)"/>
              <path d="M0,50 L20,46 L40,42 L60,38 L80,30 L100,32 L120,24 L140,26 L160,18 L180,20 L200,12 L220,14 L240,8 L260,10 L280,4" stroke="#c0593a" strokeWidth="1.5" fill="none"/>
              <line x1="0" y1="58" x2="280" y2="58" stroke="rgba(250,247,241,.15)" strokeWidth="0.5"/>
            </svg>
          </div>
          <div style={{ marginTop: 8, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', color: 'rgba(250,247,241,.5)', display: 'flex', justifyContent: 'space-between' }}>
            <span>CLIENT REVENUE INDEX</span>
            <span style={{ color: 'var(--terra)' }}>+ TRENDING</span>
          </div>
        </div>
      </section>

      <div className="strip">
        <span>EXPERIENCE</span>
        <span className="pill">Google</span>
        <span className="pill">Amazon</span>
        <span className="pill">Snap</span>
        <span className="pill">Microsoft</span>
        <span style={{ flex: 1 }} />
        <span>US · EU · LATAM · APAC</span>
      </div>

      <section className="services">
        <div className="services-head">
          <div>
            <div className="eyebrow">Services · 04</div>
            <h2 style={{ marginTop: 14 }}>Four practices, one stack.</h2>
          </div>
          <p style={{ color: 'var(--muted)' }}>Most engagements traverse all four. Some teams just need one — we'll be honest about which.</p>
        </div>
        <table className="table">
          <thead>
            <tr><th>#</th><th>Practice</th><th>What it covers</th><th>Typical scope</th></tr>
          </thead>
          <tbody>
            <tr>
              <td className="num">01</td>
              <td className="name">Product Strategy</td>
              <td className="desc">Roadmap design, monetization architecture, platform vision tied to revenue outcomes you can measure.</td>
              <td className="scope">4–8 weeks</td>
            </tr>
            <tr>
              <td className="num">02</td>
              <td className="name">System Design</td>
              <td className="desc">Architecture for ad serving, auction, targeting, and measurement — built to scale through the next platform shift.</td>
              <td className="scope">6–12 weeks</td>
            </tr>
            <tr>
              <td className="num">03</td>
              <td className="name">Engineering</td>
              <td className="desc">Implementation partners. Prototype to production-grade systems alongside your team.</td>
              <td className="scope">8–24 weeks</td>
            </tr>
            <tr>
              <td className="num">04</td>
              <td className="name">Data Science</td>
              <td className="desc">Ranking, pacing, attribution, rigorous experimentation — the part most teams underinvest in.</td>
              <td className="scope">6–16 weeks</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="approach">
        <div className="eyebrow">How we work</div>
        <h2 style={{ marginTop: 14 }}>Three phases. About twelve weeks. Then we get out of the way.</h2>
        <div className="ap-grid">
          <div className="ap">
            <div className="label"><span>Phase 01</span><span>~ 2 wk</span></div>
            <h3>Assess</h3>
            <p>We read the stack, product, and org. Strengths to lean on, risks to retire — fast and in writing.</p>
            <div className="deliv">
              <div className="h">Deliverables</div>
              <ul>
                <li>System inventory</li>
                <li>Risk & opportunity map</li>
                <li>Revenue diagnostic</li>
              </ul>
            </div>
          </div>
          <div className="ap">
            <div className="label"><span>Phase 02</span><span>~ 3 wk</span></div>
            <h3>Strategize</h3>
            <p>Together we frame measurable bets — short-term wins beside long-term platform plays — and sequence them.</p>
            <div className="deliv">
              <div className="h">Deliverables</div>
              <ul>
                <li>12-month roadmap</li>
                <li>Objective tree</li>
                <li>Investment thesis</li>
              </ul>
            </div>
          </div>
          <div className="ap">
            <div className="label"><span>Phase 03</span><span>~ 7+ wk</span></div>
            <h3>Execute</h3>
            <p>Hands-on prioritization, sequencing, and shipping. Specific guidance on monetization, performance, and engagement.</p>
            <div className="deliv">
              <div className="h">Deliverables</div>
              <ul>
                <li>Working systems</li>
                <li>Experimentation harness</li>
                <li>Production handoff</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="founder">
        <div className="portrait" />
        <div>
          <div className="eyebrow">Founder</div>
          <h2 style={{ marginTop: 14 }}>Lars Hirsch.<br/><em>The bench, then the bench again.</em></h2>
          <p className="bio">
            Lars led product, applied science, and engineering at Google, Amazon, Snap, and Microsoft. He pioneered graph-cluster designs that delivered significant ads revenue growth and have since been adopted across the industry.
          </p>
          <div className="stats">
            <div>
              <div className="v">M.S.</div>
              <div className="l">CS / ML, Georgia Tech</div>
            </div>
            <div>
              <div className="v">MBA</div>
              <div className="l">Cornell University</div>
            </div>
            <div>
              <div className="v">20+</div>
              <div className="l">Years adtech</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-grid">
          <h2>Ready to put real <em>tenacity</em> on your roadmap?</h2>
          <div className="terms">
            <b>HELLO@TERRIERADTECH.COM</b><br/>
            REPLIES IN ≤ 24 HRS<br/><br/>
            <b>NEXT AVAILABILITY</b><br/>
            Q3 2026 · 1 SLOT REMAINING
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 TERRIER ADTECH LLC</span>
        <span>BROOKLYN · REMOTE · WORLDWIDE</span>
        <span>v.2026.05</span>
      </footer>
    </div>
  );
}

window.VariantData = VariantData;
