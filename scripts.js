// === Sidebar Scroll Highlight & Smooth Scroll ===
const links = document.querySelectorAll('aside nav ul li a');
const sections = Array.from(links).map(link => document.querySelector(link.getAttribute('href')));
const sidebarOffset = 20; // adjust if needed for fixed sidebar height/padding

function updateActiveLink() {
  const scrollPos = window.scrollY + sidebarOffset + window.innerHeight / 4;

  sections.forEach((section, i) => {
    if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('resize', updateActiveLink);
document.addEventListener('DOMContentLoaded', updateActiveLink);

// Smooth scroll with sidebar offset
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const yOffset = -sidebarOffset; // adjust if needed
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  });
});

// === Interests Carousel ===
document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('interests-section');
  let carouselStarted = false;

  function startCarousels() {
    if (carouselStarted) return;
    carouselStarted = true;

    document.querySelectorAll('.carousel').forEach(carousel => {
      const images = carousel.querySelectorAll('.carousel img');
      if (images.length <= 1) return;

      let currentIndex = 0;
      images[currentIndex].classList.add('active');

      setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      }, 3000);
    });
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
           rect.bottom >= 0;
  }

  function checkSection() {
    if (isInViewport(section)) {
      startCarousels();
      window.removeEventListener('scroll', checkSection);
    }
  }

  window.addEventListener('scroll', checkSection);
  checkSection(); // run immediately in case section is visible on load
});

// === Projects Carousel (multiple) ===
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-project .carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-image');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');

    let currentIndex = 0;

    // Create dots
    images.forEach((_, i) => {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('span');

    function updateCarousel(index) {
      images.forEach(img => img.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      images[index].classList.add('active');
      dots[index].classList.add('active');
      currentIndex = index;
    }

    prevBtn.addEventListener('click', () => {
      let newIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel(newIndex);
    });

    nextBtn.addEventListener('click', () => {
      let newIndex = (currentIndex + 1) % images.length;
      updateCarousel(newIndex);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => updateCarousel(i));
    });
  });
});
