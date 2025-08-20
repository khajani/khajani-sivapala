document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle
  const toggleBtn = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const links = document.querySelectorAll('.sidebar nav ul li a');
  const mainContent = document.querySelector('main') || document.querySelector('.content');

  toggleBtn?.addEventListener('click', () => {
    sidebar?.classList.toggle('active');
  });

  // Mobile: close sidebar on link click
  links.forEach(link => {
    link?.addEventListener('click', () => {
      if (window.innerWidth < 768) sidebar?.classList.remove('active');
    });
  });

  // Reset on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      sidebar?.classList.remove('active');
      if (mainContent) mainContent.style.marginLeft = '';
    }
  });

  // Scroll highlighting (safe version)
  const navLinks = document.querySelectorAll('.sidebar nav ul li a');
  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach((section, idx) => {
      if (section && section.offsetTop <= scrollPos + 100 &&
          section.offsetTop + section.offsetHeight > scrollPos + 100) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[idx]?.classList.add('active');
      }
    });
  });
});
