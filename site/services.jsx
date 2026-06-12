// Services page — full detail view.

function ServicesPage() {
  useSmoothAnchors();

  const services = SERVICES;

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
            <h2>{s.title}</h2>
            <p className="desc">{s.desc}</p>
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
