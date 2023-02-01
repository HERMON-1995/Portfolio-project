const menu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const logo = document.querySelector('.logo');
const floating = document.querySelector('.header');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
  logo.classList.toggle('removed');
  floating.classList.toggle('float');
});