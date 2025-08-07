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

