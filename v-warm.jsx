// V3 — WARM, HUMAN-LED, FOUNDER-FORWARD
// Boutique-feel. Founder front and center, conversational tone, warm cream
// backgrounds, real handwritten signature, smaller scale, more personal.

function VariantWarm() {
  return (
    <div className="tat-root v-warm" style={{ width: '100%', height: '100%', overflow: 'auto', background: 'var(--cream)' }}>
      <style>{`
        .v-warm { font-size: 16px; line-height: 1.6; background: var(--cream); }
        .v-warm .nav { display: flex; align-items: center; justify-content: space-between; padding: 24px 48px; position: sticky; top: 0; z-index: 10; background: rgba(244,239,230,.92); backdrop-filter: blur(8px); }
        .v-warm .nav-c { display: flex; gap: 28px; font-size: 14px; color: var(--ink-2); }
        .v-warm .nav-c a:hover { color: var(--terra); }

        /* Hero — letter from the founder */
        .v-warm .hero { padding: 56px 48px 72px; display: grid; grid-template-columns: 360px 1fr; gap: 64px; align-items: start; }
        .v-warm .hero-portrait {
          aspect-ratio: 4 / 5; background: var(--cream-2); position: relative;
          background-image: repeating-linear-gradient(135deg, #ddd1bd, #ddd1bd 12px, #e8dec8 12px, #e8dec8 24px);
          border-radius: 2px;
        }
        .v-warm .hero-portrait::after {
          content: 'PORTRAIT — Lars Hirsch';
          position: absolute; bottom: 14px; left: 14px;
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; color: var(--muted-2);
          background: rgba(244,239,230,.85); padding: 4px 8px; border-radius: 2px;
        }
        .v-warm .hero-portrait .tag {
          position: absolute; top: 14px; right: 14px;
          background: var(--ink); color: var(--paper); padding: 6px 10px;
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: 999px;
        }
        .v-warm .hero-text h1 {
          font-family: var(--serif); font-weight: 400;
          font-size: 64px; line-height: 1.05; letter-spacing: -0.025em;
        }
        .v-warm .hero-text h1 em { font-style: italic; color: var(--terra); }
        .v-warm .hero-text .lede {
          margin-top: 28px; font-family: var(--serif); font-size: 22px; line-height: 1.5;
          color: var(--ink-2); max-width: 580px;
        }
        .v-warm .signature {
          margin-top: 40px; display: flex; align-items: center; gap: 20px;
        }
        .v-warm .sig-mark {
          font-family: 'Snell Roundhand', 'Brush Script MT', cursive;
          font-size: 36px; color: var(--ink-2); transform: rotate(-3deg);
          letter-spacing: 0.02em;
        }
        .v-warm .sig-meta { font-family: var(--mono); font-size: 11px; color: var(--muted); letter-spacing: 0.1em; line-height: 1.6; }
        .v-warm .hero-text .row { margin-top: 36px; display: flex; gap: 12px; }

        /* Trust bar */
        .v-warm .trust { padding: 28px 48px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); display: flex; align-items: center; gap: 36px; flex-wrap: wrap; }
        .v-warm .trust .label { font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
        .v-warm .trust .pill { font-family: var(--serif); font-size: 18px; color: var(--ink); padding: 6px 14px; border-radius: 999px; background: var(--paper); border: 1px solid var(--line); }

        /* Why us — handwritten-feeling list */
        .v-warm .why { padding: 96px 48px; max-width: 1100px; }
        .v-warm .why h2 { font-family: var(--serif); font-size: 44px; font-weight: 400; line-height: 1.1; max-width: 760px; }
        .v-warm .why h2 em { font-style: italic; color: var(--terra); }
        .v-warm .why-grid { margin-top: 48px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px 56px; }
        .v-warm .why-item { display: grid; grid-template-columns: 32px 1fr; gap: 16px; padding: 20px 0; border-top: 1px solid var(--line); }
        .v-warm .why-item .check { width: 26px; height: 26px; border-radius: 50%; background: var(--terra); display: flex; align-items: center; justify-content: center; color: var(--paper); font-size: 14px; }
        .v-warm .why-item h3 { font-family: var(--serif); font-size: 22px; font-weight: 500; }
        .v-warm .why-item p { margin-top: 6px; font-size: 14px; color: var(--muted); }

        /* Services — soft cards */
        .v-warm .services { padding: 96px 48px; background: var(--paper); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .v-warm .services-head { max-width: 720px; }
        .v-warm .services-head h2 { font-family: var(--serif); font-size: 44px; font-weight: 400; line-height: 1.1; }
        .v-warm .services-head p { margin-top: 16px; color: var(--muted); }
        .v-warm .svc-grid { margin-top: 48px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .v-warm .svc-card { background: var(--cream); padding: 32px; border-radius: 6px; transition: transform .2s, box-shadow .2s; cursor: pointer; }
        .v-warm .svc-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,23,20,.06); }
        .v-warm .svc-card .num { font-family: var(--mono); font-size: 11px; color: var(--terra); letter-spacing: 0.12em; }
        .v-warm .svc-card h3 { margin-top: 14px; font-family: var(--serif); font-size: 26px; font-weight: 500; }
        .v-warm .svc-card p { margin-top: 12px; font-size: 14px; color: var(--muted); line-height: 1.6; }
        .v-warm .svc-card .tags { margin-top: 18px; display: flex; flex-wrap: wrap; gap: 6px; }
        .v-warm .svc-card .tag { font-family: var(--mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); padding: 4px 8px; background: var(--paper); border-radius: 999px; }

        /* Process — illustrated steps */
        .v-warm .process { padding: 96px 48px; max-width: 1100px; }
        .v-warm .process h2 { font-family: var(--serif); font-size: 44px; font-weight: 400; line-height: 1.1; max-width: 720px; }
        .v-warm .pgrid { margin-top: 56px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; position: relative; }
        .v-warm .pgrid::before {
          content: ''; position: absolute; top: 24px; left: 8%; right: 8%; height: 1px;
          background-image: radial-gradient(circle, var(--clay) 1.2px, transparent 1.6px);
          background-size: 10px 4px; background-repeat: repeat-x;
        }
        .v-warm .pstep { position: relative; padding: 0 24px; }
        .v-warm .pstep .dot { width: 48px; height: 48px; border-radius: 50%; background: var(--cream-2); border: 1px solid var(--terra); display: flex; align-items: center; justify-content: center; font-family: var(--serif); font-style: italic; color: var(--terra); font-size: 22px; position: relative; z-index: 1; }
        .v-warm .pstep h3 { margin-top: 24px; font-family: var(--serif); font-size: 26px; font-weight: 500; }
        .v-warm .pstep p { margin-top: 12px; color: var(--muted); font-size: 14px; line-height: 1.6; }

        /* Quote / testimonial */
        .v-warm .quote { padding: 96px 48px; background: var(--ink); color: var(--paper); border-top: 1px solid var(--line); }
        .v-warm .quote-inner { max-width: 920px; }
        .v-warm .quote .mark-q { font-family: var(--serif); font-style: italic; font-size: 96px; line-height: 1; color: var(--terra); }
        .v-warm .quote blockquote { font-family: var(--serif); font-size: 36px; line-height: 1.25; font-weight: 400; margin-top: -24px; }
        .v-warm .quote cite { display: block; margin-top: 28px; font-family: var(--mono); font-size: 12px; letter-spacing: 0.1em; color: rgba(250,247,241,.6); font-style: normal; }
        .v-warm .quote .placeholder-tag { font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(250,247,241,.4); margin-top: 20px; padding: 4px 10px; border: 1px dashed rgba(250,247,241,.2); display: inline-block; border-radius: 999px; }

        /* CTA */
        .v-warm .cta { padding: 120px 48px; text-align: center; }
        .v-warm .cta h2 { font-family: var(--serif); font-size: 56px; font-weight: 400; line-height: 1.05; }
        .v-warm .cta h2 em { font-style: italic; color: var(--terra); }
        .v-warm .cta p { margin-top: 20px; color: var(--muted); max-width: 540px; margin-left: auto; margin-right: auto; font-size: 17px; }
        .v-warm .cta .row { margin-top: 32px; display: flex; gap: 12px; justify-content: center; }

        /* Footer */
        .v-warm .footer { padding: 48px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 32px; }
        .v-warm .footer .small { font-family: var(--mono); font-size: 11px; color: var(--muted); letter-spacing: 0.06em; }
        .v-warm .footer .links { display: flex; gap: 24px; font-size: 14px; }
      `}</style>

      <nav className="nav">
        <div className="logo">
          <TerrierMark />
          <span>Terrier <span style={{ color: 'var(--muted)' }}>AdTech</span></span>
        </div>
        <div className="nav-c">
          <a>Services</a>
          <a>Approach</a>
          <a>About</a>
          <a>Writing</a>
          <a>Contact</a>
        </div>
        <button className="btn terra" style={{ padding: '10px 18px', fontSize: 13 }}>Say hello →</button>
      </nav>

      <section className="hero">
        <div className="hero-portrait">
          <span className="tag">Founder</span>
        </div>
        <div className="hero-text">
          <div className="eyebrow" style={{ marginBottom: 20 }}>A boutique adtech consultancy</div>
          <h1>I help retail, travel, and media teams build advertising that <em>actually compounds.</em></h1>
          <p className="lede">
            Twenty years inside Google, Amazon, Snap, and Microsoft taught me what good adtech looks like — and how rare it is. Terrier brings that craft to a small handful of teams a year.
          </p>
          <div className="signature">
            <div className="sig-mark">Lars Hirsch</div>
            <div className="sig-meta">
              FOUNDER<br/>
              TERRIER ADTECH
            </div>
          </div>
          <div className="row">
            <button className="btn">Start a conversation</button>
            <button className="btn ghost">Read my notes</button>
          </div>
        </div>
      </section>

      <div className="trust">
        <span className="label">Two decades across</span>
        <span className="pill">Google</span>
        <span className="pill">Amazon</span>
        <span className="pill">Snap</span>
        <span className="pill">Microsoft</span>
        <span style={{ flex: 1 }} />
        <span className="label">Now serving US · EU · LATAM · Asia</span>
      </div>

      <section className="why">
        <div className="eyebrow">Why work with us</div>
        <h2 style={{ marginTop: 14 }}>The kind of partner you'd <em>want on your roadmap review.</em></h2>
        <div className="why-grid">
          <div className="why-item">
            <div className="check">✓</div>
            <div>
              <h3>One senior partner, not a pyramid.</h3>
              <p>You work directly with the founder and a tight bench — no juniors learning on your dime, no shifting cast.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="check">✓</div>
            <div>
              <h3>Hands-on, all the way down.</h3>
              <p>We write the spec, design the system, and stay through implementation. Strategy decks aren't deliverables.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="check">✓</div>
            <div>
              <h3>Adtech is the only thing we do.</h3>
              <p>Auctions, ranking, attribution, pacing — we've shipped these systems at the scale of the internet's largest platforms.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="check">✓</div>
            <div>
              <h3>Tied to revenue, on purpose.</h3>
              <p>Every engagement frames a measurable outcome. We don't ship recommendations and disappear.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-head">
          <div className="eyebrow">What we do</div>
          <h2 style={{ marginTop: 14 }}>End-to-end, or a tightly scoped bite.</h2>
          <p>Most engagements span all four. Sometimes a team just needs the data science sharpened, or a system redesigned. We'll be honest about what you actually need.</p>
        </div>
        <div className="svc-grid">
          <div className="svc-card">
            <div className="num">01 · STRATEGY</div>
            <h3>Product Strategy & Management</h3>
            <p>Roadmaps, monetization design, and platform vision rooted in measurable revenue outcomes — informed by what actually ships.</p>
            <div className="tags"><span className="tag">Roadmaps</span><span className="tag">Monetization</span><span className="tag">Platform vision</span></div>
          </div>
          <div className="svc-card">
            <div className="num">02 · ARCHITECTURE</div>
            <h3>System Design</h3>
            <p>Architecture for ad serving, auction, targeting, and measurement — built to scale and to outlive the next platform shift.</p>
            <div className="tags"><span className="tag">Auction</span><span className="tag">Targeting</span><span className="tag">Measurement</span></div>
          </div>
          <div className="svc-card">
            <div className="num">03 · BUILD</div>
            <h3>Engineering</h3>
            <p>Implementation partners. We move from prototype to production-grade systems alongside your team — accountable for the ship, not just the slide.</p>
            <div className="tags"><span className="tag">Prototype → prod</span><span className="tag">Code review</span><span className="tag">Tech leadership</span></div>
          </div>
          <div className="svc-card">
            <div className="num">04 · MEASURE</div>
            <h3>Data Science</h3>
            <p>Ranking, pacing, attribution, and rigorous experimentation — the part most teams underinvest in until it costs them ten percent of revenue.</p>
            <div className="tags"><span className="tag">Ranking</span><span className="tag">Pacing</span><span className="tag">Attribution</span><span className="tag">A/B</span></div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="eyebrow">How a typical engagement runs</div>
        <h2 style={{ marginTop: 14 }}>Three phases. <em>About twelve weeks.</em> Then we get out of the way.</h2>
        <div className="pgrid">
          <div className="pstep">
            <div className="dot">i</div>
            <h3>Assess</h3>
            <p>We read your stack, product, and org. Strengths to lean on, risks to retire — written down, with receipts. About two weeks.</p>
          </div>
          <div className="pstep">
            <div className="dot">ii</div>
            <h3>Strategize</h3>
            <p>Together we build a roadmap with measurable objectives and short-term wins beside long-term platform plays. Three weeks or so.</p>
          </div>
          <div className="pstep">
            <div className="dot">iii</div>
            <h3>Execute</h3>
            <p>Hands-on prioritization, sequencing, and building. Concrete guidance on monetization, performance, and engagement. Seven plus.</p>
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="quote-inner">
          <div className="mark-q">"</div>
          <blockquote>
            They don't show up with a deck — they show up with a plan, then they ship it. We've worked with consultants for a decade and never had this kind of partner.
          </blockquote>
          <cite>— [PLACEHOLDER QUOTE — replace with real client]</cite>
          <div className="placeholder-tag">Add 1–2 real testimonials here</div>
        </div>
      </section>

      <section className="cta">
        <div className="eyebrow">Get in touch</div>
        <h2 style={{ marginTop: 16 }}>Tell me what you're <em>chasing.</em></h2>
        <p>A short note about your platform and the shape of the problem. I read every email and I'll come back within a day with how we'd approach it.</p>
        <div className="row">
          <button className="btn">hello@terrieradtech.com</button>
          <button className="btn ghost">Book 30 minutes</button>
        </div>
      </section>

      <footer className="footer">
        <div className="logo" style={{ fontSize: 16 }}>
          <TerrierMark size={18} />
          <span>Terrier AdTech</span>
        </div>
        <div className="links">
          <a>Services</a>
          <a>About</a>
          <a>Writing</a>
          <a>Contact</a>
          <a>LinkedIn</a>
        </div>
        <div className="small">© 2026 Terrier AdTech LLC</div>
      </footer>
    </div>
  );
}

window.VariantWarm = VariantWarm;
