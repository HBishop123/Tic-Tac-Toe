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
      squaresId = `square-${i}-${j}`;
      const div = document.createElement("div");
      div.id = squaresId;
      div.className = "boardSquare";
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

  let currentTurn = player1.symbol;
  currentTurn = player1 ? player1.symbol : player2.symbol;

  const eachSquare = document.querySelectorAll(".boardSquare");

  eachSquare.forEach((square) => {
    square.addEventListener("click", clickEvent, { once: true });

    function clickEvent() {
      square.innerText = currentTurn;
      changeTurn()
    }
  });

  function changeTurn() {
    if (currentTurn === player1.symbol) {
      currentTurn = player2.symbol;
    } else if (currentTurn === player2.symbol) {
      currentTurn = player1.symbol;
    }
  }
})();
