document.querySelectorAll('.carousel').forEach(carousel => {
  const slides = [...carousel.querySelectorAll('.carousel-track img')];
  const dotsWrap = carousel.querySelector('.carousel-dots');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  let index = Math.max(0, slides.findIndex(s => s.classList.contains('is-active')));

  carousel.dataset.count = slides.length;
  if (slides.length === 0) return;

  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', `Imagem ${i + 1} de ${slides.length}`);
    b.addEventListener('click', () => show(i));
    dotsWrap?.appendChild(b);
    return b;
  });

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === index));
    dots.forEach((d, k) => d.classList.toggle('is-active', k === index));
  }

  prev?.addEventListener('click', () => show(index - 1));
  next?.addEventListener('click', () => show(index + 1));

  carousel.tabIndex = 0;
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  let startX = null;
  carousel.addEventListener('pointerdown', e => { startX = e.clientX; });
  carousel.addEventListener('pointerup', e => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) show(dx < 0 ? index + 1 : index - 1);
    startX = null;
  });

  show(index);
});
