// const circleClass = "circle";
// const crossClass = "x";
// let circle;
// const wincOMBINATIONS = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// const cellElements = document.querySelectorAll("[data-cell]");
// const board = document.getElementById("board");
// const restartButton = document.getElementById("restartButton");
// const winningTextElement = document.querySelector(
//   "[data-winning-message-text]"
// );
// const winningText = document.getElementById("winningMessage");
// startGame();
// restartButton.addEventListener("click", startGame);
// function startGame() {
//   circle = false;
//   cellElements.forEach((ele) => {
//     ele.classList.remove(circleClass);
//     ele.classList.remove(crossClass);
//     ele.removeEventListener("click", handleClick);
//     ele.addEventListener("click", handleClick, { once: true });
//   });
//   boardHoverClass();
//   winningText.classList.remove("show");
// }

// function handleClick(e) {
//   const cell = e.target;
//   const currentClass = circle ? circleClass : crossClass;
//   placeMark(cell, currentClass);
//   if (Checkwin(currentClass)) {
//     endGame(false);
//   } else if (isDraw()) {
//     endGame(true);
//   } else {
//     swapTurns();
//     boardHoverClass();
//   }
// }

// function placeMark(cell, currentClass) {
//   cell.classList.add(currentClass);
// }
// function swapTurns() {
//   circle = !circle;
// }

// function boardHoverClass() {
//   board.classList.remove(circleClass);
//   board.classList.remove(crossClass);

//   if (circle) {
//     board.classList.add(circleClass);
//   } else {
//     board.classList.add(crossClass);
//   }
// }
// function Checkwin(currentClass) {
//   return wincOMBINATIONS.some((ele) => {
//     return ele.every((index) => {
//       return cellElements[index].classList.contains(currentClass);
//     });
//   });
// }
// function isDraw() {
//   return [...cellElements].every((ele) => {
//     return (
//       ele.classList.contains(circleClass) || ele.classList.contains(crossClass)
//     );
//   });
// }
// function endGame(draw) {
//   if (draw) {
//     winningTextElement.innerText = "Draw!";
//   } else {
//     winningTextElement.innerText = `${circle ? "O s wins" : "X s wins"}`;
//   }
//   winningText.classList.add("show");
// }

//-----------------------------------------PRACTICE CODE-------------------------------------------//

const circleClass = "circle";
const crossClass = "x";
let circle;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningtextElemet = document.querySelector("[data-winning-message-text]");
const winningText = document.getElementById("winningMessage");
const restartButton = document.getElementById("restartButton");

startGame();
restartButton.addEventListener("click", startGame);

function startGame() {
  winningText.classList.remove("show");
  circle = false;
  cellElements.forEach((ele) => {
    ele.classList.remove(circleClass);
    ele.classList.remove(crossClass);
    ele.removeEventListener("click", handleClick);
    ele.addEventListener("click", handleClick, { once: true });
  });
  setBoaordHoverClass();
  
}

cellElements.forEach((ele) => {
  ele.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circle ? circleClass : crossClass;
  placeMarker(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (checkDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoaordHoverClass();
  }
}

function placeMarker(cell, currentClass) {
  cell.classList.add(currentClass);
}
function swapTurns() {
  circle = !circle;
}
function setBoaordHoverClass() {
  board.classList.remove(circleClass);
  board.classList.remove(crossClass);

  if (circle) {
    board.classList.add(circleClass);
  } else {
    board.classList.add(crossClass);
  }
}
function checkWin(currentClass) {
  return winningCombinations.some((ele) => {
    return ele.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
function checkDraw() {
  return [...cellElements].every((ele) => {
    return (
      ele.classList.contains(circleClass) || ele.classList.contains(crossClass)
    );
  });
}
function endGame(draw) {
  if (draw) {
    winningtextElemet.innerText = "Draw!";
  } else {
    winningtextElemet.innerText = `${circle ? "O s wins" : "X s wins"}`;
  }
  winningText.classList.add("show");
}
