function computerMove(GameBoard) {
    // Find an empty position on the board
    var board = GameBoard;
    var emptyPositions = [];
    for (var i = 0; i < board.length; i++) {
        if (board[i] === 0) {
            emptyPositions.push(i);
        }
    }
    for (var i = 0; i < emptyPositions.length; i++) {
        var position = emptyPositions[i];

        // Simulate placing the computer's move in the empty position
        board[position] = 2;

        // Check if the computer wins
        if (checkWin(board, 2)) {
            // If the computer wins by placing in this position, make the move
            return board;
        }

        // Undo the move for future simulations
        board[position] = 0;
    }

    // If there's no winning move, choose a random empty position
    var randomIndex = Math.floor(Math.random() * emptyPositions.length);
    var computerPosition = emptyPositions[randomIndex];

    // Make the move (put 2 in the chosen position)
    board[computerPosition] = 2;

    return board;
}

// Function to check if a player has won
function checkWin(board, player) {
    // Implement your win-checking logic here
    // For simplicity, you can use a predefined function or create your own logic
    // For example, you can check rows, columns, and diagonals for the same player symbol
    // Return true if the player has won, false otherwise
}

var GameBoard = [0,0,0,0,0,0,0,0,0];

function TileOne() {
  GameBoard[0] = 1;
  GameMove = GameMove+1;
  computerMove(GameBoard,1);
  console.log(GameBoard);
}
function TileTwo() {
  GameBoard[1] = 1;
  computerMove(GameBoard);
  console.log(GameBoard);
}
function TileThree() {
  GameBoard[2] = 1;
  computerMove(GameBoard);
  console.log(GameBoard);
}
function TileFour() {
  GameBoard[3] = 1;
  computerMove(GameBoard);
  console.log(GameBoard);
}
function TileFive() {
  GameBoard[4] = 1;
  computerMove(GameBoard);
  console.log(GameBoard);
}
function TileSix() {
  GameBoard[5] = 1;
  computerMove(GameBoard);
  console.log(GameBoard);
}
function TileSeven() {
  GameBoard[6] = 1;
  computerMove(GameBoard);
  console.log(GameBoard);
}
function TileEight() {
  GameBoard[7] = 1;
  computerMove(GameBoard);
  console.log(GameBoard);
}
function TileNine() {
  GameBoard[8] = 1;
  computerMove(GameBoard);
  console.log(GameBoard);
}
var elementIds = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
function ScoreDisplay() {
    for (var i = 0; i < GameBoard.length; i++) {
        var DisplayElement = document.getElementById(elementIds[i]);

        if (GameBoard[i] == 1) {
            DisplayElement.textContent = "X";
        } else if (GameBoard[i] == 2) {
            DisplayElement.textContent = "O";
        }
    }
}
let TickTackToe = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var WinA = [1,1,1];
var WinB = [2,2,2];
var Score = document.getElementById("score");

function ScoreKeeper() {
    var Test = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for (var i = 0; i < TickTackToe.length; i++) {
        for (var j = 0; j < 3; j++) {
            Test[i][j] = GameBoard[TickTackToe[i][j]];
        }
    }

    console.log(Test);
    for (var f = 0; f < Test.length; f++) {
        if (
            Test[f][0] === WinA[0] && Test[f][1] === WinA[1] && Test[f][2] === WinA[2]
        ) {
            Score.textContent = "X wins the game";
            break;
        } else if (
            Test[f][0] === WinB[0] && Test[f][1] === WinB[1] && Test[f][2] === WinB[2]
        ) {
            Score.textContent = "O wins the game";
            break;
        }
    }
}