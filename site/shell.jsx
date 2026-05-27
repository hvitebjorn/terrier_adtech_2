// Shared site chrome — Nav and Footer used across all pages.

function SiteNav({ active }) {
  const items = [
    { id: 'work', label: 'Work', href: 'index.html#work' },
    { id: 'services', label: 'Services', href: 'services.html' },
    { id: 'approach', label: 'Approach', href: 'index.html#approach' },
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];
  return (
    <nav className="site-nav">
      <a className="logo" href="index.html" style={{ textDecoration: 'none', color: 'inherit' }}>
        <TerrierMark />
        <span>Terrier <span style={{ color: 'var(--muted)' }}>AdTech</span></span>
      </a>
      <div className="nav-c">
        {items.map((it) => (
          <a key={it.id} href={it.href} aria-current={active === it.id ? 'page' : undefined}
            className={active === it.id ? 'is-active' : ''}>
            {it.label}
          </a>
        ))}
      </div>
      <a className="btn" href="contact.html" style={{ padding: '10px 18px', fontSize: 13, textDecoration: 'none' }}>Book a call →</a>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="logo" href="index.html" style={{ color: 'var(--paper)', fontSize: 22, textDecoration: 'none' }}>
            <TerrierMark size={22} />
            <span>Terrier AdTech</span>
          </a>
          <p style={{ marginTop: 16, color: 'rgba(250,247,241,.6)', maxWidth: 320 }}>
            An adtech consultancy for retail, travel, and media platforms ready to compound.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <a href="services.html#strategy">Product Strategy</a>
          <a href="services.html#system">System Design</a>
          <a href="services.html#engineering">Engineering</a>
          <a href="services.html#data">Data Science</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="about.html">About</a>
          <a href="about.html">Founder</a>
          <a href="index.html#writing">Writing</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:hello@terrieradtech.com">hello@terrieradtech.com</a>
          <a href="https://www.linkedin.com/in/larshirsch" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <div className="colophon">
        <span>© 2026 Terrier AdTech LLC</span>
        <span>Brooklyn · Remote · Worldwide</span>
      </div>
    </footer>
  );
}

// Smooth in-page anchor scrolling for nav links pointing to the current page.
function useSmoothAnchors() {
  React.useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href*="#"]');
      if (!a) return;
      const url = new URL(a.href, window.location.href);
      // Same-page hash: smooth scroll
      if (url.pathname === window.location.pathname && url.hash) {
        const el = document.querySelector(url.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', url.hash);
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}

Object.assign(window, { SiteNav, SiteFooter, useSmoothAnchors });
