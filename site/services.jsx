// Services page — full detail view.

function ServicesPage() {
  useSmoothAnchors();

  const services = [
    {
      id: 'strategy', n: '01', t: 'Product Strategy & Management',
      d: 'Roadmaps, monetization architecture, and platform vision tied to revenue outcomes — informed by what actually ships, not what looks good in a deck.',
      tags: ['Roadmaps', 'Monetization', 'Platform vision', 'OKRs', 'Investment cases'],
      out: ['12-month roadmap with sequenced bets', 'Objective tree mapped to revenue', 'Quarterly review cadence', 'Hiring plan to back the plan'],
    },
    {
      id: 'system', n: '02', t: 'System Design',
      d: 'Architecture for ad serving, auction, targeting, and measurement. Built to scale through the next platform shift, not just the next quarter.',
      tags: ['Auction', 'Targeting', 'Serving', 'Measurement', 'Privacy'],
      out: ['System reference architecture', 'Capacity & cost models', 'Migration playbook', 'Latency & reliability budgets'],
    },
    {
      id: 'engineering', n: '03', t: 'Engineering',
      d: 'Implementation partners. We move with your team from prototype to production-grade systems — accountable for the ship, not just the slide.',
      tags: ['Prototyping', 'Production hardening', 'Code review', 'Tech leadership'],
      out: ['Working production systems', 'Test & deploy harness', 'Operational runbooks', 'Knowledge transfer to your team'],
    },
    {
      id: 'data', n: '04', t: 'Data Science',
      d: 'Ranking, pacing, attribution, and rigorous experimentation — the part most teams underinvest in until it costs them ten percent of revenue.',
      tags: ['Ranking', 'Pacing', 'Attribution', 'Causal inference', 'A/B'],
      out: ['Modeling pipelines', 'Experiment platform review', 'Attribution methodology', 'Inference & drift monitoring'],
    },
  ];

  return (
    <div className="tat-root services-page">
      <SiteNav active="services" />

      <section className="page-head">
        <span className="eyebrow">A field guide to</span>
        <h1>What we actually do.</h1>
        <p className="lede">
          Most engagements traverse all four practices. Some teams just need one. We pick up where your team needs the most leverage and stay until the system runs without us.
        </p>
      </section>

      {services.map((s) => (
        <section key={s.id} id={s.id} className="service-block">
          <div className="num">{s.n}</div>
          <div>
            <h2>{s.t}</h2>
            <p className="desc">{s.d}</p>
            <div className="tags">
              {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
          <aside className="out-card">
            <div className="label">Typical outputs</div>
            <ul>
              {s.out.map((o) => <li key={o}>— {o}</li>)}
            </ul>
          </aside>
        </section>
      ))}

      <section className="closer">
        <h2>Not sure which you need? <em>Start with a call.</em></h2>
        <a className="btn" href="contact.html"
          style={{ marginTop: 28, background: 'var(--terra)', borderColor: 'var(--terra)', textDecoration: 'none' }}>
          Book 30 minutes →
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ServicesPage />);
