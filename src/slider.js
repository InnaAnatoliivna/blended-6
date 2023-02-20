import Swiper from 'swiper/swiper-bundle';
const swiper = new Swiper('.foto-swiper', {
  pagination: {
    el: '.foto-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyOnViewport: true,
    padeUpDown: true,
  },
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  speed: 1000,
  // mousewheel: {
  //   sensitivity: 1,
  // },
  breakpoints: {
    370: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      loop: true,
    },
    1469: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoplay: false,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
