// Toggle mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
