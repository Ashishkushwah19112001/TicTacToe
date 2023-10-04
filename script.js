let gameBoard = document.querySelector(".board");
let gameState = document.querySelector(".gameStatement");
let startButton = document.querySelector(".button");

let gamePlay = false;

let turn = "X";
let count = 1;

let gameStart = new Audio("gamestart.mp3");
let gameTie = new Audio("videogame-death-sound-43894.mp3");
let wrongClick = new Audio("wrongclickTrimmed.mp3");
let gameWin = new Audio("vicAud.mp3");

startButton.addEventListener("click", function () {
  if (gamePlay == false) {
    // gamePlay=true;
    gameStart.play();
    gameState.innerHTML = "X's turn";
    startButton.innerHTML = "Press to Reset";
    startButton.style.backgroundColor = "red";
  } else {
    clearAllBlocks();
    startButton.innerHTML = "Start";
    gameState.innerHTML = "";
    count = 1;
    turn = "X";
    startButton.style.backgroundColor = "#2698cd";
  }

  gamePlay = !gamePlay;
});
gameBoard.addEventListener("click", function (event) {
  let block = event.target;

  if (gamePlay == true && block.innerHTML == "") {
    
    block.innerHTML = turn;
    count++;
    if (turn == "X") {
      block.style.color = "red";
      turn = "0";
    } else {
      block.style.color = "blue";
      turn = "X";
    }
    gameState.innerHTML = turn + "'s turn";
    if (winnerChecker() == "X") {
      gameState.innerHTML = "X wins the game";
      gameWin.play();
      // gamePlay = false;
      resetThegame();
    } else if (winnerChecker() == "0") {
      gameState.innerHTML = "0 wins the game";
      gameWin.play();
      // gamePlay = false;
      resetThegame();
    } else if (count == 10) {
      gameState.innerHTML = "TIE";
      gameTie.play();
      // gamePlay = false;
      resetThegame();
    }
  }else{
    wrongClick.play();
  }
});

function winnerChecker() {
  let blockArray = document.querySelectorAll(".cell");
  if (
    (blockArray[0].innerHTML == "X" &&
      blockArray[1].innerHTML == "X" &&
      blockArray[2].innerHTML == "X") ||
    (blockArray[3].innerHTML == "X" &&
      blockArray[4].innerHTML == "X" &&
      blockArray[5].innerHTML == "X") ||
    (blockArray[6].innerHTML == "X" &&
      blockArray[7].innerHTML == "X" &&
      blockArray[8].innerHTML == "X") ||
    (blockArray[0].innerHTML == "X" &&
      blockArray[3].innerHTML == "X" &&
      blockArray[6].innerHTML == "X") ||
    (blockArray[1].innerHTML == "X" &&
      blockArray[4].innerHTML == "X" &&
      blockArray[7].innerHTML == "X") ||
    (blockArray[2].innerHTML == "X" &&
      blockArray[5].innerHTML == "X" &&
      blockArray[8].innerHTML == "X") ||
    (blockArray[0].innerHTML == "X" &&
      blockArray[4].innerHTML == "X" &&
      blockArray[8].innerHTML == "X") ||
    (blockArray[2].innerHTML == "X" &&
      blockArray[4].innerHTML == "X" &&
      blockArray[6].innerHTML == "X")
  ) {
    return "X";
  } else if (
    (blockArray[0].innerHTML == "0" &&
      blockArray[1].innerHTML == "0" &&
      blockArray[2].innerHTML == "0") ||
    (blockArray[3].innerHTML == "0" &&
      blockArray[4].innerHTML == "0" &&
      blockArray[5].innerHTML == "0") ||
    (blockArray[6].innerHTML == "0" &&
      blockArray[7].innerHTML == "0" &&
      blockArray[8].innerHTML == "0") ||
    (blockArray[0].innerHTML == "0" &&
      blockArray[3].innerHTML == "0" &&
      blockArray[6].innerHTML == "0") ||
    (blockArray[1].innerHTML == "0" &&
      blockArray[4].innerHTML == "0" &&
      blockArray[7].innerHTML == "0") ||
    (blockArray[2].innerHTML == "0" &&
      blockArray[5].innerHTML == "0" &&
      blockArray[8].innerHTML == "0") ||
    (blockArray[0].innerHTML == "0" &&
      blockArray[4].innerHTML == "0" &&
      blockArray[8].innerHTML == "0") ||
    (blockArray[2].innerHTML == "0" &&
      blockArray[4].innerHTML == "0" &&
      blockArray[6].innerHTML == "0")
  ) {
    return "0";
  } else {
  }
}

function clearAllBlocks() {
  let blockArray = document.querySelectorAll(".cell");
  for (let i = 0; i < blockArray.length; i++) {
    blockArray[i].innerHTML = "";
  }
}
function resetThegame() {
  gamePlay = false;
  startButton.innerHTML = "Starting...";
  startButton.disabled = true;
  setTimeout(() => {
    startButton.disabled = false;
    // startButton.click();
    clearAllBlocks();
    startButton.innerHTML = "Start";
    gameState.innerHTML = "";
    count = 1;
    turn = "X";
    startButton.style.backgroundColor = "#2698cd";
  }, 3000);
}
