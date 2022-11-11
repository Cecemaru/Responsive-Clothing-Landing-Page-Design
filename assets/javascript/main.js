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

// ================ SCROLL REVEAL ANIMATION ===============
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 200,
  // reset:true
});

sr.reveal(
  `.home__data, .products__container, .footer__container, .footer__info`
);
sr.reveal(`.home__images`, { delay: 100, origin: "bottom" });
sr.reveal(`.new__card, .brand__img`, { interval: 100 });
sr.reveal(`.collection__explore:nth-child(1)`, { origin: "right" });
sr.reveal(`.collection__explore:nth-child(2)`, { origin: "left" });

// =============== DARK LIGHT THEME ===============
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
