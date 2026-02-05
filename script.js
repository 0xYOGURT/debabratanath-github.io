const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let blobs = [];

function createBlobs(){
  blobs = [];
  const numBlobs = 20; // you can increase/decrease
  for(let i=0; i<numBlobs; i++){
    blobs.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 300 + Math.random() * 500, // bigger radius
      hue: Math.random() * 360,
      dx: (Math.random()-0.5)*0.3,
      dy: (Math.random()-0.5)*0.3
    });
  }
}
createBlobs();

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  blobs.forEach(b=>{
    const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
    gradient.addColorStop(0, `hsla(${b.hue}, 80%, 60%, 0.4)`);
    gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI*2);
    ctx.fill();
  });
}

function animate(){
  blobs.forEach(b=>{
    b.x += b.dx;
    b.y += b.dy;

    // keep blobs in screen
    if(b.x < -b.radius) b.x = canvas.width + b.radius;
    if(b.x > canvas.width + b.radius) b.x = -b.radius;
    if(b.y < -b.radius) b.y = canvas.height + b.radius;
    if(b.y > canvas.height + b.radius) b.y = -b.radius;
  });

  draw();
  requestAnimationFrame(animate);
}

animate();
