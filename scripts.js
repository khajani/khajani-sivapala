// Sidebar Toggle
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.sidebar nav ul li a');
const mediaQuery = window.matchMedia('(min-width: 1025px)');

// Open sidebar by default on desktop
function handleSidebarOnResize(e) {
  if (e.matches) {
    sidebar.classList.add('active');
  } else {
    sidebar.classList.remove('active');
  }
}

// Initial check
handleSidebarOnResize(mediaQuery);
mediaQuery.addEventListener('change', handleSidebarOnResize);

// Toggle button for mobile
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close sidebar when link is clicked (mobile only)
links.forEach(link => {
  link.addEventListener('click', () => {
    if (!mediaQuery.matches) {
      sidebar.classList.remove('active');
    }
  });
});

// Highlight active link on scroll
const sections = Array.from(links).map(link => document.querySelector(link.getAttribute('href')));
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 150; // offset for header
  sections.forEach((section, i) => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
});

// Interest Carousels
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 3000); // 3 seconds
});
