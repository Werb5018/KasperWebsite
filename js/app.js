(() => {
  const grid     = document.getElementById('gallery-grid');
  const overlay  = document.getElementById('modal-overlay');
  const mImg     = document.getElementById('modal-img');
  const mDate    = document.getElementById('modal-date');
  const mHead    = document.getElementById('modal-headline');
  const mText    = document.getElementById('modal-text');
  const mLink    = document.getElementById('modal-link');
  const mClose   = document.getElementById('modal-close');
  const sPrev    = document.getElementById('slide-prev');
  const sNext    = document.getElementById('slide-next');

  let currentIndex = -1;

  // ── Build gallery ──────────────────────────
  function buildGallery() {
    posts.forEach((post, i) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.innerHTML = `
        <div class="gallery-item-img">
          <img src="${post.image}" alt="${post.headline}"
               onerror="this.parentElement.innerHTML='<div class=\\'img-placeholder\\'><span>No image</span></div>'">
        </div>
        <div class="gallery-item-caption">
          <div class="gallery-item-date">${post.date}</div>
          <div class="gallery-item-headline">${post.headline}</div>
        </div>`;
      item.addEventListener('click', () => openModal(i));
      grid.appendChild(item);
    });
  }

  // ── Modal ──────────────────────────────────
  function openModal(index) {
    currentIndex = index;
    const post = posts[index];
    mImg.src = post.image;
    mImg.alt = post.headline;
    mImg.onerror = () => {
      mImg.parentElement.innerHTML = '<div class="img-placeholder"><span>No image</span></div>';
    };
    mDate.textContent = post.date;
    mHead.textContent = post.headline;
    mText.textContent = post.text;
    mLink.href        = post.linkedinUrl;

    sPrev.disabled = index === 0;
    sNext.disabled = index === posts.length - 1;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    currentIndex = -1;
  }

  function showPrev() {
    if (currentIndex > 0) openModal(currentIndex - 1);
  }

  function showNext() {
    if (currentIndex < posts.length - 1) openModal(currentIndex + 1);
  }

  mClose.addEventListener('click', closeModal);
  sPrev.addEventListener('click', showPrev);
  sNext.addEventListener('click', showNext);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     closeModal();
    if (e.key === 'ArrowLeft')  showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // ── Smooth nav ─────────────────────────────
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const target = document.getElementById(el.dataset.nav);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  buildGallery();
})();
