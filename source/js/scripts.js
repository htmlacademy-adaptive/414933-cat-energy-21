// Mobile menu show/hide toggle

let mobileMenu = document.querySelector('.page-nav');
let menuToggleButton = document.querySelector('.page-header__toggle');

mobileMenu.classList.add('page-nav--closed');
menuToggleButton.classList.remove('page-header__toggle--hidden');

menuToggleButton.onclick = function() {
  mobileMenu.classList.toggle('page-nav--closed');
  mobileMenu.classList.toggle('page-nav--opened');
  menuToggleButton.classList.toggle('page-header__toggle--closed');
  menuToggleButton.classList.toggle('page-header__toggle--opened');
}
