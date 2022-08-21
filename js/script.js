const menuButton = document.getElementById("menu-btn");
const overLay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", navToggle);

function navToggle() {
  menuButton.classList.toggle("open");
  overLay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}
