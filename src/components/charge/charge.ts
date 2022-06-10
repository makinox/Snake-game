import '../../styles/styles.css';

export default function Charge() {
  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('GameCanvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d') as any;
    document.addEventListener('keydown', keyPush);
    setInterval(() => game(canvas, context), 2000 / 15);
    controls();
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

  // Initializing events
  const resultDisplay: Element | any = document.querySelector('#result');
  const resetButton = document.getElementById('reset');
  const modal = document.getElementById('modal');

  // Initializing snake values
  let trail: Array<object> | any = [];
  let tail = 5;

  function game(canvas: HTMLElement | any, context: any) {
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

    // Start? verification
    if (tail - 5 === 0) {
      resetButton.style.display = 'block';
    } else {
      resetButton.style.display = 'none';
    }

    trail.push({x: px, y: py});
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

  function moveLeft() {
    xv = -1;
    yv = 0;
  }
  function moveUp() {
    xv = 0;
    yv = -1;
  }
  function moveRight() {
    xv = 1;
    yv = 0;
  }
  function moveDown() {
    xv = 0;
    yv = 1;
  }

  // User movements
  function keyPush(evt: object | any) {
    switch (evt.keyCode) {
      case 37:
        return moveLeft();
      case 38:
        return moveUp();
      case 39:
        return moveRight();
      case 40:
        return moveDown();
    }
  }

  function HandleLoose() {
    // console.log('Perdiste');
    // alert('Perdiste');
    // showNotification('Perdiste', 9000);
    resetButton.style.display = 'block';
    resultDisplay.textContent = 0;
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
    resultDisplay.textContent = tail - 5;
  }

  function RandomizeFruit() {
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }

  function showNotification(modalText = 'Modal content', time = 1000) {
    modal.innerHTML = modalText;
    modal.className = 'article-modal-span animation';
    setTimeout(() => {
      modal.className = 'article-modal-span';
    }, time);
  }

  function controls() {
    const controlSing = [
      {id: 'left', class: 'fas fa-arrow-left'},
      {id: 'right', class: 'fas fa-arrow-right'},
      {id: 'down', class: 'fas fa-arrow-down'},
      {id: 'up', class: 'fas fa-arrow-up'},
    ];
    const controlContainer = document.querySelector('.section-controls');
    controlSing.forEach(item => {
      const coverElement = document.createElement('span');
      const iconElement = document.createElement('i');
      iconElement.className = item.class;
      coverElement.appendChild(iconElement);
      coverElement.onclick = () => {
        switch (item.id) {
          case 'left':
            return moveLeft();
          case 'right':
            return moveRight();

          case 'down':
            return moveDown();

          case 'up':
            return moveUp();
        }
      };
      controlContainer.appendChild(coverElement);
    });
  }
}
