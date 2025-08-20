// ================= Sidebar Toggle =================
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.sidebar nav ul li a');
const content = document.querySelector('main, .content');

// Function to check if device is mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Initialize sidebar state
function initSidebar() {
  if (isMobile()) {
    sidebar.classList.remove('active');
  } else {
    sidebar.classList.add('active'); // Desktop default open
  }
}
initSidebar();

// Toggle sidebar on hamburger click
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  toggleBtn.classList.toggle('open');

  // Desktop: shift content dynamically
  if (!isMobile()) {
    if (sidebar.classList.contains('active')) {
      content.style.marginLeft = '250px';
      content.style.maxWidth = 'calc(100% - 250px)';
    } else {
      content.style.marginLeft = '0';
      content.style.maxWidth = '100%';
    }
  }
});

// Close mobile sidebar when a link is clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    if (isMobile()) {
      sidebar.classList.remove('active');
      toggleBtn.classList.remove('open');
    }
  });
});

// Adjust sidebar state on window resize
window.addEventListener('resize', () => {
  initSidebar();
});
