// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// World map -> Turkey zoom: trigger when section enters view (replays on re-entry)
const mapViewport = document.getElementById('mapViewport');
if (mapViewport && 'IntersectionObserver' in window) {
  const mapObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mapViewport.classList.add('play');
        } else {
          mapViewport.classList.remove('play');
        }
      });
    },
    { threshold: 0.45 }
  );
  mapObserver.observe(mapViewport);
}

// Close mobile menu when a link is clicked
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (e) => {
    // allow dropdown parent toggles on mobile without closing
    if (window.innerWidth <= 980 && link.parentElement.classList.contains('has-dropdown')) {
      return;
    }
    nav.classList.remove('open');
  });
});
