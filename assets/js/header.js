const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("toggle-menu"),
  closeMenu = document.getElementById("close-menu"),
  dropDown = document.querySelector(".drop_down"),
  megaMenu = document.querySelector(".megamenu");

dropDown.addEventListener("click", () => {
  megaMenu.classList.toggle("open");
});

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show_menu");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show_menu");
});
