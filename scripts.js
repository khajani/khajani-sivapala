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

<script>
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = { threshold: 0.5 }; // Start when 50% visible

  document.querySelectorAll('.carousel').forEach(carousel => {
    let index = 0;
    const images = carousel.querySelectorAll('.carousel-image');
    let intervalId;

    const startCarousel = () => {
      clearInterval(intervalId); // avoid duplicates
      setTimeout(() => { // wait before starting
        intervalId = setInterval(() => {
          images[index].classList.remove('active');
          index = (index + 1) % images.length;
          images[index].classList.add('active');
        }, 3000); // change every 3s
      }, 2000); // 2s delay before rotating
    };

    const stopCarousel = () => {
      clearInterval(intervalId);
      index = 0;
      images.forEach(img => img.classList.remove('active'));
      images[0].classList.add('active'); // reset to cover image
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCarousel();
        } else {
          stopCarousel();
        }
      });
    }, observerOptions);

    observer.observe(carousel);
  });
});
</script>
