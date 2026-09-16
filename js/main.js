(() => {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (hamburger && menu) {
    const closeMenu = () => {
      menu.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    };

    hamburger.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', e => {
      if (!header.contains(e.target)) closeMenu();
    });
  }

  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link || reduceMotion) return;
    const href = link.getAttribute('href');
    const internal =
      href &&
      !href.startsWith('#') &&
      !href.startsWith('http') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:') &&
      !link.hasAttribute('download') &&
      link.target !== '_blank' &&
      link.getAttribute('aria-disabled') !== 'true';
    if (!internal || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    document.documentElement.classList.add('is-leaving');
    setTimeout(() => { window.location.href = href; }, 280);
  });

  window.addEventListener('pageshow', e => {
    if (e.persisted) document.documentElement.classList.remove('is-leaving');
  });

  const revealTargets = document.querySelectorAll(
    '.section-title, .section-head, .project-card, .skill-group, .exp-item, .contact-card, .contact-desc, .timeline-item, .project-row, .about-hero > *, .cta'
  );

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(el => {
      const siblings = [...el.parentElement.children].filter(c => c.matches('.project-card, .skill-badge, .contact-card, .timeline-item'));
      const i = siblings.indexOf(el);
      if (i > 0) el.style.transitionDelay = `${Math.min(i, 8) * 70}ms`;
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  document.querySelectorAll('.project-media img, .carousel img').forEach(img => {
    const markMissing = () => img.closest('.project-media, .carousel')?.classList.add('is-missing');
    if (img.complete && img.naturalWidth === 0) markMissing();
    img.addEventListener('error', markMissing);
  });
})();
