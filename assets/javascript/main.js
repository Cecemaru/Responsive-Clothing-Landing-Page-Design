// =============== CHANGE BACKGROUND HEADER ===================
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll 50 viewport height,add the scroll-header class
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
