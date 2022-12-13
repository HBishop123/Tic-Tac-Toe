// Module for the gameboard
const Gameboard = (() => {
  const gameBoard = document.getElementById("game-board");
  const board = [
    ["", "", "O"],
    ["", "O", ""],
    ["X", "", ""],
  ];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // squaresId = `square-${i}-${j}`;
      const div = document.createElement("div");
      div.className = "boardSquare";
      div.style.border = "1px solid black";
      div.innerText = board[i][j];
      gameBoard.appendChild(div);
      console.log(div.id);
    }
  }
  gameBoard.addEventListener("click", (e) => {
    console.log(e.target);
  });
})();

// factory function for player Name
function Player(name, symbol) {
  return {
    name,
    symbol,
  };
}

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");
