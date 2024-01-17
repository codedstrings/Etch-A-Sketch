const mainContainer=document.querySelector('.main-container');
const drawingBoard=document.querySelector('.drawing-board');
let gridSize=10;
function drawBoard(){
    console.log("drawing board");
    drawingBoard.classList.remove('inactive');
    drawingBoard.classList.add('active');
    drawingBoard.innerHTML = '';
    for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j <gridSize; j++) {
          var gridBox = document.createElement('div');
          gridBox.className = 'grid-box';
          drawingBoard.appendChild(gridBox);         
        } 
      }
      drawingBoard.removeEventListener('click',drawBoard);
}
drawingBoard.addEventListener('click',drawBoard);
