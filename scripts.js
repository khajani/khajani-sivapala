// Highlight sidebar nav on scroll
const links = document.querySelectorAll('aside nav ul li a');
const sections = Array.from(links).map(link => document.querySelector(link.getAttribute('href')));
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight / 3;
  sections.forEach((section, i) => {
    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
});

// Simple carousel script for all carousels
document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  if(images.length <= 1) return; // no carousel if 1 image only

  setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 3000); // change every 3 seconds
});
