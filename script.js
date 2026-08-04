// ===== mobile menu =====
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

navToggle?.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileMenuClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// ===== header shrink shadow on scroll =====
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 12) header.style.boxShadow = '0 8px 24px rgba(10,74,82,0.08)';
  else header.style.boxShadow = 'none';
});

// ===== scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== quote form =====
// NOTE: this form currently only shows a confirmation message.
// To actually receive submissions, connect it to a form backend
// such as Formspree (https://formspree.io) by setting the form's
// action attribute to your Formspree endpoint and method="POST".
const quoteForm = document.getElementById('quoteForm');
const formStatus = document.getElementById('formStatus');

quoteForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.style.display = 'block';
  quoteForm.reset();
  setTimeout(() => { formStatus.style.display = 'none'; }, 6000);
});
