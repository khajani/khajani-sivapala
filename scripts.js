// Highlight sidebar nav on scroll
const links = document.querySelectorAll('aside nav ul li a');
const sections = Array.from(links).map(link => document.querySelector(link.getAttribute('href')));
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight / 3;
  sections.forEach((section, i) => {
    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('interests-section');
  let carouselStarted = false;

  function startCarousels() {
    if (carouselStarted) return;
    carouselStarted = true;

    document.querySelectorAll('.carousel').forEach(carousel => {
      const images = carousel.querySelectorAll('.carousel-image');
      if (images.length <= 1) return; // no carousel if 1 image only

      let currentIndex = 0;

      setTimeout(() => {
        setInterval(() => {
          images[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].classList.add('active');
        }, 3000);
      }, 3000);
    });
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function onScroll() {
    if (isInViewport(section)) {
      startCarousels();
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);

  if (isInViewport(section)) {
    startCarousels();
  }
});
