// ===== Sidebar Toggle =====
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  toggleBtn.classList.toggle('open'); // optional, if you want animated hamburger
});

// ===== Highlight sidebar nav on scroll =====
const links = document.querySelectorAll('.sidebar nav ul li a');
const sections = Array.from(links).map(link =>
  document.querySelector(link.getAttribute('href'))
);

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight / 3;
  sections.forEach((section, i) => {
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
});

// ===== Interests Carousel =====
document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('interests-section');
  let carouselStarted = false;

  function startCarousels() {
    if (carouselStarted) return;
    carouselStarted = true;

    document.querySelectorAll('.carousel').forEach(carousel => {
      const images = carousel.querySelectorAll('.carousel-image');
      if (images.length <= 1) return;

      let currentIndex = 0;

      // initial delay
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
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function onScroll() {
    if (isInViewport(section)) {
      startCarousels();
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);

  if (isInViewport(section)) startCarousels();
});

// ===== Smooth scroll for sidebar links =====
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close sidebar on mobile after click
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      toggleBtn.classList.remove('open');
    }
  });
});

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px; /* hide initially */
  width: 250px;
  height: 100%;
  background-color: #211f20; /* your dark color */
  transition: left 0.3s ease;
  z-index: 1000;
  padding-top: 2rem;
}

.sidebar.active {
  left: 0; /* slide in */
}

/* Toggle button (hamburger) */
.menu-toggle {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1100;
}

/* Main content should remain full width */
main {
  transition: margin-left 0.3s ease;
}

/* Optional: shift content when sidebar opens (desktop) */
@media(min-width: 768px) {
  .sidebar.active + main {
    margin-left: 250px;
  }
}

