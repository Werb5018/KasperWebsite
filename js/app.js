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

  /* ── Image sliders ────────────────────────────────────── */
  document.querySelectorAll('.slider').forEach(slider => {
    const track = slider.querySelector('.slider-track');
    const slides = Array.from(track.children);
    const dotsWrap = slider.querySelector('.slider-dots');
    if (slides.length <= 1) {
      slider.querySelectorAll('.slider-btn').forEach(b => b.remove());
      if (dotsWrap) dotsWrap.remove();
      return;
    }
    let index = 0;

    const dots = slides.map((_, i) => {
      const d = document.createElement('button');
      d.className = 'slider-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Go to image ' + (i + 1));
      d.addEventListener('click', () => go(i));
      dotsWrap && dotsWrap.appendChild(d);
      return d;
    });

    const go = (i) => {
      index = (i + slides.length) % slides.length;
      track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
      dots.forEach((d, di) => d.classList.toggle('active', di === index));
    };

    slider.querySelector('.slider-btn.prev')?.addEventListener('click', () => go(index - 1));
    slider.querySelector('.slider-btn.next')?.addEventListener('click', () => go(index + 1));

    // keep dots in sync when swiping/scrolling manually
    let t;
    track.addEventListener('scroll', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        if (i !== index) { index = i; dots.forEach((d, di) => d.classList.toggle('active', di === index)); }
      }, 80);
    }, { passive: true });
  });

  /* ── Year in footer ───────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
