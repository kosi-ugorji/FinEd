// Toggle mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});


// Testimonials toggle
const testiButtons = document.querySelectorAll('.testi-nav button');
const testiItems   = document.querySelectorAll('.testi-item');

testiButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // reset all
    testiButtons.forEach(b => b.classList.remove('active'));
    testiItems.forEach(i => i.classList.remove('active'));

    // activate this button + its panel
    btn.classList.add('active');
    document.getElementById(btn.dataset.testimonial)
            .classList.add('active');
  });
});
