// Module for the gameboard
const CreateGameBoard = (() => {
  const gameBoard = document.getElementById("game-board");
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const div = document.createElement("div");
      div.id = "squaresId";
      div.style.border = "1px solid black";
      div.innerText = board[i][j];
      gameBoard.appendChild(div);
    }
  }
})();

function Player(name, symbol) {
  return {
    name,
    symbol,
  };
}

const Gameflow = (() => {
  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let currentTurn = player1.symbol;
  currentTurn = player1.symbol ? player1.symbol : player2.symbol;

  const eachSquare = document.querySelectorAll("#squaresId");
  eachSquare.forEach((square) => {
    square.addEventListener("click", clickEvent, { once: true }); // once: true - only allows a click event once

    function clickEvent(e) {
      const square = e.target;
      square.innerText = currentTurn;
      square.classList.add(currentTurn);
      console.log(square);
      changeTurn();
      if (checkForWinner(currentTurn)) {
        console.log("winner");
      }
    }
  });

  function changeTurn() {
    if (currentTurn === player1.symbol) {
      currentTurn = player2.symbol;
    } else if (currentTurn === player2.symbol) {
      currentTurn = player1.symbol;
    }
  }

  function checkForWinner(currentTurn) {
    return winningCombos.some((combos) => {
      return combos.every((index) => {
        return eachSquare[index].classList.contains(currentTurn);
      });
    });
  }
})();
