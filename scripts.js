document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const links = document.querySelectorAll('.sidebar nav ul li a');
  const mainContent = document.querySelector('main') || document.querySelector('.content');

  // Hamburger icon animation
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    toggleBtn.classList.toggle('open'); // for X animation
  });

  // Mobile: close sidebar on link click
  links.forEach(link => {
    link?.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        sidebar?.classList.remove('active');
        toggleBtn.classList.remove('open');
      }
    });
  });

  // Reset on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      if (!sidebar.classList.contains('active')) {
        sidebar.classList.add('active'); // desktop default open
      }
      mainContent.style.marginLeft = ''; 
    } else {
      toggleBtn.classList.remove('open');
    }
  });

  // Initialize sidebar for desktop
  if (window.innerWidth >= 768) {
    sidebar?.classList.add('active');
  }

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
