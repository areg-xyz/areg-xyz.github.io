/**
 * Main JavaScript file for info.are.gy
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('info.are.gy loaded successfully');

  // Smooth scrolling for anchor links
  initSmoothScrolling();

  // Add scroll animation for elements
  initScrollAnimations();
});

/**
 * Initialize smooth scrolling for internal anchor links
 */
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Initialize scroll animations for elements with data-animate attribute
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach(function(el) {
    observer.observe(el);
  });
}


