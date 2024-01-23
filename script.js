const mainContainer = document.querySelector(".main-container");
const drawingBoard = document.querySelector(".drawing-board");
const gridSizeBtn = document.querySelector(".grid-size-btn");
let gridSize = 16;
let pageLoaded = false;

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
      gridBox.addEventListener("mouseover", startDrawing);
      gridRow.appendChild(gridBox);
    }
    drawingBoard.appendChild(gridRow);
  }
  drawingBoard.removeEventListener("click", pageActive);
  pageLoaded = true;
}
//entry point
drawingBoard.addEventListener("click", pageActive);
//pageActive draws the first grid and activates control board buttons
function pageActive() {
  //draw default 16x16 drawingboard
  drawBoard();
  //activate grid size change button
  gridSizeBtn.addEventListener("click", () => {
    gridSize = prompt("What's the grid size you want?");
    if (gridSize >= 16 && gridSize <= 100) {
      drawBoard();
    } else alert("Enter a grid size between 16-100");
  });
}

function startDrawing(event) {
  // Access the gridBox that the event has fired on
  const gridBox = event.target;
  gridBox.classList.add("colored-grid");
  //remove event listener after coloring.
  gridBox.removeEventListener("mouseover", startDrawing);
}
