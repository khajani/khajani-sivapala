/* ================= Sidebar Toggle + Mobile Auto-Close ================= */
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.sidebar nav ul li a');
const mainContent = document.querySelector('main') || document.querySelector('.content');

// Hamburger toggle
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Mobile: close sidebar when a link is clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      sidebar.classList.remove('active');
    }
  });
});

// Optional: reset on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    sidebar.classList.remove('active'); // remove active class
    if (mainContent) mainContent.style.marginLeft = ''; // reset inline margin
  }
});

/* ================= Scroll Highlighting (keep your existing code) ================= */
const navLinks = document.querySelectorAll('aside nav ul li a');
const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY || window.pageYOffset;

  sections.forEach((section, idx) => {
    if (
      section.offsetTop <= scrollPos + 100 &&
      section.offsetTop + section.offsetHeight > scrollPos + 100
    ) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[idx].classList.add('active');
    }
  });
});
