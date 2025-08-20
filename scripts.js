// ================= Sidebar Toggle =================
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('main, .content');
const links = document.querySelectorAll('.sidebar nav ul li a');

// Helper to detect mobile
function isMobile() {
  return window.innerWidth < 768;
}

// Toggle sidebar open/close
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  toggleBtn.classList.toggle('open');

  // Desktop: push content
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

// Auto-close sidebar on mobile when a link is clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    if (isMobile() && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      toggleBtn.classList.remove('open');
    }
  });
});

// ================= Interests Carousel ========================
const carousels = document.querySelectorAll('.interests-grid');

carousels.forEach(carousel => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
  });
  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
  });
  carousel.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    carousel.scrollLeft = scrollLeft - walk;
  });
});

// Optional: touch support for mobile
carousels.forEach(carousel => {
  let startX = 0;
  let scrollLeft = 0;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });
});

// ================= Window Resize =================
window.addEventListener('resize', () => {
  if (!isMobile()) {
    // Ensure sidebar starts open on desktop
    if (!sidebar.classList.contains('active')) {
      sidebar.classList.add('active');
      toggleBtn.classList.remove('open');
      content.style.marginLeft = '250px';
      content.style.maxWidth = 'calc(100% - 250px)';
    }
  } else {
    // On mobile, collapse sidebar
    sidebar.classList.remove('active');
    toggleBtn.classList.remove('open');
    content.style.marginLeft = '0';
    content.style.maxWidth = '100%';
  }
});
