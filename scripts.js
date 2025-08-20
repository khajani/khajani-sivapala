// ================= Sidebar Toggle =================
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

// Open sidebar by default on desktop
if (window.innerWidth >= 768) {
  sidebar.classList.add('active');
}

// Toggle sidebar for mobile
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close sidebar on mobile when a link is clicked
const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      sidebar.classList.remove('active');
    }
  });
});

// ================= Highlight Active Section on Scroll =================
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY || document.documentElement.scrollTop;
  sections.forEach(section => {
    const id = section.getAttribute('id');
    const link = document.querySelector(`.sidebar nav ul li a[href="#${id}"]`);
    if (section.offsetTop <= scrollPos + 100 && section.offsetTop + section.offsetHeight > scrollPos + 100) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// ================= Carousel for Interests =================
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
  let currentIndex = 0;
  const images = carousel.querySelectorAll('.carousel-image');
  images.forEach((img, idx) => {
    if (idx !== 0) img.style.display = 'none';
  });

  // Auto-slide every 3 seconds
  setInterval(() => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }, 3000);
});
