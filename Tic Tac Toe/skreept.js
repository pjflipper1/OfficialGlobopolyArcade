function ZeroCounter(board,TotalRuns,ZeroCount){
    var GameBoard = board;
    if (GameBoard[TotalRuns] === 0){
        ZeroCount = ZeroCount + 1; 
    }
    if (TotalRuns === 8){
        return ZeroCount;
    }
    else{
        return ZeroCounter(board,(TotalRuns+1),ZeroCount);
    }
}

function computerMove(GameBoard) {
    var board = GameBoard;
    var ZeroCount = ZeroCounter(board,0,0);
    var CasePlays = [[1,3,4],[0,2,4],[1,4,5],[0,4,6],[3,5,1],[2,4,8],[3,4,7],[4,6,8],[4,5,7]];
    var Moves = [];

    if(ZeroCount === 8){
        if (board === [1,0,0,0,0,0,0,0,0]){
            var randomNumber = Math.floor(Math.random() * 3);
            var Moves = CasePlays[0];
            board[Moves[randomNumber]] = 2;
        }
        if (board === [0,1,0,0,0,0,0,0,0]){
            var randomNumber = Math.floor(Math.random() * 3);
            var Moves = CasePlays[1];
            board[Moves[randomNumber]] = 2;
        }
        if (board === [0,0,1,0,0,0,0,0,0]){
            var randomNumber = Math.floor(Math.random() * 3);
            var Moves = CasePlays[2];
            board[Moves[randomNumber]] = 2;
        }
        if (board === [0,0,0,1,0,0,0,0,0]){
            var randomNumber = Math.floor(Math.random() * 3);
            var Moves = CasePlays[3];
            board[Moves[randomNumber]] = 2;
        }
        if (board === [0,0,0,0,1,0,0,0,0]){
            var randomNumber = Math.floor(Math.random() * 3);
            var Moves = CasePlays[4];
            board[Moves[randomNumber]] = 2;
        }
        if (board === [0,0,0,0,0,1,0,0,0]){
            var randomNumber = Math.floor(Math.random() * 3);
            var Moves = CasePlays[5];
            board[Moves[randomNumber]] = 2;
        }
        if (board === [0,0,0,0,0,0,1,0,0]){
            var randomNumber = Math.floor(Math.random() * 3);
            var Moves = CasePlays[6];
            board[Moves[randomNumber]] = 2;
        }
        if (board === [0,0,0,0,0,0,0,1,0]){
            var randomNumber = Math.floor(Math.random() * 3);
            var Moves = CasePlays[7];
            board[Moves[randomNumber]] = 2;
        }
        if (board === [0,0,0,0,0,0,0,0,1]){
            var randomNumber = Math.floor(Math.random() * 3);
            var Moves = CasePlays[8];
            board[Moves[randomNumber]] = 2;
        }
    }
    else if(ZeroCount = 6){
        
    }
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