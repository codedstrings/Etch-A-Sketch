const mainContainer = document.querySelector('.main-container');
const drawingBoard = document.querySelector('.drawing-board');
let gridSize = 50;

function drawBoard() {
  console.log("drawing board");
  drawingBoard.classList.remove('inactive');
  drawingBoard.classList.add('active');
  drawingBoard.style.setProperty('--gridSize', gridSize);
  drawingBoard.innerHTML = '';

  for (var i = 0; i < gridSize * gridSize; i++) {
    var gridBox = document.createElement('div');
    gridBox.className = 'grid-box';
    drawingBoard.appendChild(gridBox);
  }

  drawingBoard.removeEventListener('click', drawBoard);
}

drawingBoard.addEventListener('click', drawBoard);

