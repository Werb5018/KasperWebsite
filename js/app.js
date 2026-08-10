/* ═══════════════════════════════════════════════════════════
   No Objectives — interactions
   ═══════════════════════════════════════════════════════════ */
(() => {
  const nav      = document.getElementById('nav');
  const toggle   = document.getElementById('nav-toggle');
  const links    = document.querySelector('.nav-links');

  /* ── Sticky nav styling on scroll ─────────────────────── */
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile menu ──────────────────────────────────────── */
  const closeMenu = () => {
    links.classList.remove('open');
    nav.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  /* ── Smooth scroll for in-page links ──────────────────── */
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', e => {
      const id = el.dataset.nav;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
        history.replaceState(null, '', '#' + id);
      }
    });
  });

  /* ── Reveal-on-scroll ─────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* ── Year in footer ───────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
