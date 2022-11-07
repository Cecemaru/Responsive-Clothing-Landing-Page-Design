// =============== CHANGE BACKGROUND HEADER ===================
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll 50 viewport height,add the scroll-header class
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// ==================== SWIPER PRODUCT ==================
let swiperProduct = new Swiper(".products__container", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      spaceBetween: 72,
    },
  },
});

// ================= SHOW HIDE SCROLL UP ===============
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
