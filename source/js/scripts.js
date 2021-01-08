// Mobile menu show/hide toggle

let mobileMenu = document.querySelector('.page-nav');
let menuToggleButton = document.querySelector('.page-header__toggle');

menuToggleButton.onclick = function() {
  mobileMenu.classList.toggle('page-nav--closed');
  mobileMenu.classList.toggle('page-nav--opened');
  menuToggleButton.classList.toggle('page-header__toggle--closed');
  menuToggleButton.classList.toggle('page-header__toggle--opened');
}
