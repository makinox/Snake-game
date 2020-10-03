document.addEventListener('DOMContentLoaded', () => {
  canvas = document.getElementById('GameCanvas');
  ctx = canvas.getContext('2d');
  document.addEventListener('keydown', keyPush);
  setInterval(game, 2000 / 15);
});

window.onload = function () {};

px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 5;
function game() {
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
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Fill the snake with the color lime
  ctx.fillStyle = 'lime';
  for (var i = 0; i < trail.length; i++) {
    // Snake status
    // console.log({ trail, trailLenght: trail.length });
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == px && trail[i].y == py) {
      // Inmovil or restart condition
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
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }
  ctx.fillStyle = 'red';
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}
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
