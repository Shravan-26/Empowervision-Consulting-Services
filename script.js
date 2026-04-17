// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Toggle dropdown on click
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

dropdownToggle.addEventListener('click', (e) => {
  e.preventDefault();
  dropdown.classList.toggle('active');
});
