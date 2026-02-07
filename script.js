/**
 * Portfolio JavaScript
 * Handles dynamic features and animations
 */

// ======================================
// COPYRIGHT YEAR (Dynamic)
// ======================================
function updateCopyrightYear() {
  const copyrightElement = document.getElementById('copyright');
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear}`;
  }
}

// ======================================
// RANDOM RAINBOW GENERATOR
// ======================================
function randomHue() {
  return Math.floor(Math.random() * 360); // 0-359
}

function generateRandomRainbow() {
  const colors = [];
  for (let i = 0; i < 7; i++) { // 7 colors for rainbow
    colors.push(`hsl(${randomHue()}, 80%, 60%)`);
  }
  return colors;
}

// ======================================
// RANDOM RAINBOW HIGHLIGHT
// ======================================
function randomHighlightGradient() {
  const highlight = document.querySelector('.highlight');
  if (highlight) {
    // Generate random offset between -100% to 100%
    const randomOffset = Math.floor(Math.random() * 200) - 100;
    highlight.style.setProperty('--rainbow-start', `${randomOffset}%`);
  }
}

// ======================================
// RANDOM RAINBOW NAVBAR BORDER
// ======================================
function randomNavbarGradient() {
  const colors = generateRandomRainbow();
  
  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.borderBottom = '4px solid';
    nav.style.borderImage = `linear-gradient(90deg, ${colors.join(', ')}) 1`;
  }
}

// ======================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ======================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ======================================
// INITIALIZE ON DOM LOAD
// ======================================
document.addEventListener('DOMContentLoaded', () => {
  updateCopyrightYear();
  randomNavbarGradient();
  randomHighlightGradient();
});

// Optional: randomize every 5 seconds (each will have different pattern)
// setInterval(() => {
//   randomNavbarGradient();
// }, 5000);


