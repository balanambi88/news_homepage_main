document
  .querySelector(".hamburger-menu")
  .addEventListener("click", openMobileMenu);
function openMobileMenu() {
  document.querySelector(".modal-bg").style.display = "block";
  document.querySelector(".mobile-menu").classList.add("show-menu");
}

document
  .querySelector(".menu-close")
  .addEventListener("click", closeMobileMenu);
function closeMobileMenu() {
  document.querySelector(".modal-bg").style.display = "none";
  document.querySelector(".mobile-menu").classList.remove("show-menu");
}
