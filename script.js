const mainContainer = document.querySelector(".main-container");
const drawingBoard = document.querySelector(".drawing-board");
let gridSize = 16;

function drawBoard() {
  console.log("drawing board");
  drawingBoard.classList.remove("inactive");
  drawingBoard.classList.add("active");
  drawingBoard.style.setProperty("--gridSize", gridSize);
  drawingBoard.innerHTML = "";

  for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement("div");
    gridRow.className = "grid-row";
    for (let j = 0; j < gridSize; j++) {
      let gridBox = document.createElement("div");
      gridBox.className = "grid-box";
      gridRow.appendChild(gridBox);
    }
    drawingBoard.appendChild(gridRow);
  }

  drawingBoard.removeEventListener("click", drawBoard);
}

drawingBoard.addEventListener("click", drawBoard);
