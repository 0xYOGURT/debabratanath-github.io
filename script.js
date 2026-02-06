// RANDOM RAINBOW NAVBAR BORDER
function randomHue() {
  return Math.floor(Math.random() * 360); // 0-359
}

function randomNavbarGradient() {
  const colors = [];
  for (let i = 0; i < 7; i++) { // 7 colors for rainbow
    colors.push(`hsl(${randomHue()}, 80%, 60%)`);
  }

  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.borderBottom = '4px solid';
    nav.style.borderImage = `linear-gradient(90deg, ${colors.join(', ')}) 1`;
  }
}

// Run once when page loads
randomNavbarGradient();

// Optional: randomize every 3 seconds
// setInterval(randomNavbarGradient, 3000);
