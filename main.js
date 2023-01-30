const menu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});