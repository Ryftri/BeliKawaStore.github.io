window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var navbarMenu = document.querySelector("ul");
  header.classList.toggle("sticky", window.scrollY > 200);
  navbarMenu.classList.toggle("sticky", window.scrollY > 200);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
