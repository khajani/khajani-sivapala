// Sidebar toggle
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const links = document.querySelectorAll('.sidebar nav ul li a');

// Desktop: keep sidebar open by default
function checkSidebar() {
  if (window.innerWidth >= 768) {
    sidebar.classList.remove('collapsed');
    content.style.marginLeft = '250px';
    content.style.maxWidth = 'calc(100% - 250px)';
  } else {
    sidebar.classList.add('collapsed');
    content.style.marginLeft = '0';
    content.style.maxWidth = '100%';
  }
}
checkSidebar();
window.addEventListener('resize', checkSidebar);

// Mobile toggle button
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close sidebar on link click (mobile)
links.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      sidebar.classList.remove('active');
    }
  });
});

// Simple carousel functionality
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  // Auto-slide every 3s
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 3000);

  showImage(currentIndex);
});
