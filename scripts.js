// ================= Sidebar =================
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

// Desktop: open sidebar by default
if (window.innerWidth >= 768) {
  sidebar.classList.add('active');
}

// Toggle sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close sidebar on mobile when clicking a link
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) sidebar.classList.remove('active');
  });
});

// Highlight active section
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

// ================= Carousel for interests =================
document.querySelectorAll('.carousel').forEach(carousel => {
  let index = 0;
  const images = carousel.querySelectorAll('img');
  if (images.length > 0) images[0].style.display = 'block';
  setInterval(() => {
    images[index].style.display = 'none';
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
  }, 3000);
});

// ================= Fade-up animation =================
function fadeUpOnScroll() {
  const fadeElements = document.querySelectorAll('section, .experience-card, .project-card, .cert-item, .interest-card');
  const triggerBottom = window.innerHeight - 100;
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.classList.add('fade-up');
    }
  });
}
window.addEventListener('scroll', fadeUpOnScroll);
window.addEventListener('load', fadeUpOnScroll);
