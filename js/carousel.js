const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {
  const images = carousel.querySelectorAll(".carousel-img");
  const dots = carousel.querySelectorAll(".dot");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");

  let index = 0;

  function showSlide(i) {
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    images[i].classList.add("active");
    dots[i].classList.add("active");
  }

  next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showSlide(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });
});