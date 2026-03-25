/* =============================================
   PORTFOLIO ANIMATIONS — Rafael Gomes DEV
   - Page transitions (fade in/out)
   - Scroll reveal animations
   ============================================= */

/* ===== PAGE TRANSITION ===== */

// Fade in — CSS already sets opacity:0 and transition, so just flip to 1
document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    document.documentElement.style.opacity = '1';
  });
});

// Fade out before navigating to another page
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;

  const href = link.getAttribute('href');

  // Ignore anchors, external links, downloads, mailto, tel
  if (
    !href ||
    href.startsWith('#') ||
    href.startsWith('http') ||
    href.startsWith('mailto') ||
    href.startsWith('tel') ||
    link.hasAttribute('download') ||
    link.target === '_blank'
  ) return;

  e.preventDefault();

  document.documentElement.style.opacity = '0';

  setTimeout(() => {
    window.location.href = href;
  }, 380);
});

/* ===== SCROLL REVEAL ===== */

// Elements to animate on scroll
const REVEAL_SELECTORS = [
  '.hero-text',
  '.hero-img',
  '.hero-left',
  '.hero-terminal',
  '.project-card',
  '.skill-column',
  '.exp-item',
  '.contact-text',
  '.contact-photo',
  '.timeline-item',
  '.project-container',
  '.projects-hero h1',
  '.projects-hero p',
  '.projects-cta',
  '.section h2',
  '.projects-title',
  '.skills-title',
  '.experiencia-title',
  '.contact-title',
  '.timeline h2',
  '.location-badge',
];

// Add base styles for reveal
const style = document.createElement('style');
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .reveal.reveal-left {
    transform: translateX(-40px);
  }

  .reveal.reveal-right {
    transform: translateX(40px);
  }

  .reveal.visible {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
document.head.appendChild(style);

// Mark elements
function initReveal() {
  REVEAL_SELECTORS.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (el.classList.contains('reveal')) return; // already processed

      el.classList.add('reveal');

      // Stagger delay for grid items
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter(c => c.classList.contains('reveal'));
        const idx = siblings.indexOf(el);
        if (idx > 0) {
          el.style.transitionDelay = `${idx * 80}ms`;
        }
      }

      // Alternate left/right for project containers
      if (el.classList.contains('project-container')) {
        el.style.transitionDelay = `0ms`;
      }
    });
  });
}

// IntersectionObserver to trigger animations
function startObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Navbar active link highlight
function highlightNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.style.color = '#5558f7';
      link.style.fontWeight = '600';
    }
  });
}

// Navbar scroll shadow
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }, { passive: true });
}

// Smooth scroll for anchor links
function initSmoothAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Run everything after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  startObserver();
  highlightNavLink();
  initNavbarScroll();
  initSmoothAnchor();
});
