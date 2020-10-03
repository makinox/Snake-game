document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('GameCanvas');
  const context = canvas.getContext('2d');
  document.addEventListener('keydown', keyPush);
  setInterval(() => game(canvas, context), 2000 / 15);
});

// Initializing position values
let px = 10,
  py = 10;
let gs = 20,
  tc = 20;
let ax = 15,
  ay = 15;
let xv = 0,
  yv = 0;

// Initializing snake values
let trail = [];
let tail = 5;

function game(canvas, context) {
  px += xv;
  py += yv;
  if (px < 0) {
    // Limite izquierdo alcanzado
    px = tc - 1;
  }
  if (px > tc - 1) {
    // Limite derecho alcanzado
    px = 0;
  }
  if (py < 0) {
    // Limite superior alcanzado
    py = tc - 1;
  }
  if (py > tc - 1) {
    // Limite inferior alcanzado
    py = 0;
  }

  // Fill the canvas with the color black
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Fill the snake with the color lime
  context.fillStyle = 'lime';
  for (var i = 0; i < trail.length; i++) {
    // Snake status
    context.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == px && trail[i].y == py) {
      // Inmovil or restart condition
      if (trail.length > 5) {
        HandleLoose();
      }
      tail = 5;
    }
  }
  trail.push({ x: px, y: py });
  while (trail.length > tail) {
    // Snake movement
    trail.shift();
  }

  if (ax == px && ay == py) {
    // Snake points
    SumApoint();
    RandomizeFruit();
  }
  context.fillStyle = 'red';
  context.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

// User movements
function keyPush(evt) {
  switch (evt.keyCode) {
    case 37:
      xv = -1;
      yv = 0;
      break;
    case 38:
      xv = 0;
      yv = -1;
      break;
    case 39:
      xv = 1;
      yv = 0;
      break;
    case 40:
      xv = 0;
      yv = 1;
      break;
  }
}

function HandleLoose() {
  console.log('Perdiste');
  alert('Perdiste');
  Restart();
}

function Restart() {
  px = 10;
  py = 10;
  gs = 20;
  tc = 20;
  ax = 15;
  ay = 15;
  xv = 0;
  yv = 0;
}

function SumApoint() {
  tail++;
}

function RandomizeFruit() {
  ax = Math.floor(Math.random() * tc);
  ay = Math.floor(Math.random() * tc);
}
