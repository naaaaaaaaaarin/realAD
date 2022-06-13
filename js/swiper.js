var swiper = new Swiper(".first", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  // fade 이펙트 겹침 현상 시 사용
  fadeEffect: { crossFade: true },
  speed: 300,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".second", {
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});