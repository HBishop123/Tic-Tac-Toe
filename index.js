//
const Gameboard = (() => {
  const gameBoard = document.getElementById("game-board");
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      squaresId = "square-" + i + "-" + j;
      const div = document.createElement("div");
      div.id = squaresId;
      div.style.border = "1px solid black"
      gameBoard.appendChild(div)
      console.log(div.id);
    }
  }
})();
