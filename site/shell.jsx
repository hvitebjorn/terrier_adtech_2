// Shared site chrome — Nav and Footer used across all pages.

// Treat "/" and "/index.html" as the same page so in-page anchors resolve
// whether the dev server serves clean URLs or explicit .html paths.
function samePagePath(a, b) {
  const norm = (p) => (p.replace(/index\.html$/, '').replace(/\/$/, '') || '/');
  return norm(a) === norm(b);
}

function SiteNav({ active }) {
  const items = [
    { id: 'work', label: 'Work', href: 'index.html#work' },
    { id: 'approach', label: 'Approach', href: 'index.html#approach' },
    { id: 'services', label: 'Services', href: 'index.html#services' },
    { id: 'about', label: 'About', href: 'index.html#founder' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  // Scroll-spy: for nav items that point to a section on THIS page (Work and
  // Approach on the home page), highlight whichever section you've scrolled to,
  // overriding the page's default `active`. Items that lead to other pages
  // (Services/About/Contact) aren't spied and keep the passed-in `active`.
  const [spy, setSpy] = React.useState(null);
  React.useEffect(() => {
    const here = window.location.pathname;
    const targets = items
      .map((it) => {
        const url = new URL(it.href, window.location.href);
        if (url.hash && samePagePath(url.pathname, here)) {
          const el = document.querySelector(url.hash);
          if (el) return { id: it.id, el };
        }
        return null;
      })
      .filter(Boolean);
    if (targets.length === 0) return;

    // Sort into document order so the "last section scrolled past" logic is
    // correct even when nav order differs from page order.
    targets.sort((a, b) => a.el.getBoundingClientRect().top - b.el.getBoundingClientRect().top);

    const onScroll = () => {
      const line = 140; // approx. nav height + breathing room
      let current = targets[0].id;
      for (const t of targets) {
        if (t.el.getBoundingClientRect().top <= line) current = t.id;
      }
      setSpy(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const current = spy || active;
  return (
    <nav className="site-nav">
      <a className="logo" href="index.html" style={{ textDecoration: 'none', color: 'inherit' }}>
        <TerrierMark />
        <span>Terrier <span style={{ color: 'var(--muted)' }}>AdTech</span></span>
      </a>
      <div className="nav-c">
        {items.map((it) => (
          <a key={it.id} href={it.href} aria-current={current === it.id ? 'page' : undefined}
            className={current === it.id ? 'is-active' : ''}>
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
        <span>San Francisco · Los Angeles · Seattle · Remote · Worldwide</span>
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
      if (url.hash && samePagePath(url.pathname, window.location.pathname)) {
        const el = document.querySelector(url.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', url.hash);
        }
      }
    };
    document.addEventListener('click', onClick);

    // Arriving from another page with a hash (e.g. index.html#approach):
    // the target section is rendered by React after the browser's initial
    // anchor jump, so scroll to it once on mount.
    if (window.location.hash) {
      try {
        const el = document.querySelector(window.location.hash);
        if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start' }));
      } catch (_) { /* invalid selector in hash — ignore */ }
    }

    return () => document.removeEventListener('click', onClick);
  }, []);
}

Object.assign(window, { SiteNav, SiteFooter, useSmoothAnchors });
