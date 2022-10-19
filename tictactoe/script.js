"strict";
let botwins = 0;
let humanwins = 0;
let isWinner = false;
let isbotWinner = false;
const array = new Array();

const aiTurn = function () {
  return Math.trunc(Math.random() * 9) + 1;
};
const checkArrayFull = function (array) {
  let size = 0;
  for (let i = 0; i < 9; i++) {
    if ((array[i] !== 1 && array[i] !== 0) || array[i] == 5) {
      size++;
    }
  }
  console.log(size);
  console.log(isWinner);
  console.log(isbotWinner);
  return size;
};

function aiMovement(move) {
  console.log("ai movement", array[move - 1], winningMovesBot(array));
  if (
    array[move - 1] != 1 &&
    array[move - 1] != 0 &&
    !winningMoves(array) &&
    array[move - 1] != 1 &&
    array[move - 1] != 0 &&
    !winningMovesBot(array)
  ) {
    document.querySelector(`.index${move}`).style.backgroundColor = "#DC143C";
    array[move - 1] = 0;
    checkArrayFull(array);
    winningMoves(array);
    return;
  }
  checkArrayFull(array);
  if (checkArrayFull(array) > 1) {
    while (array[move - 1] === 1 || array[move - 1] === 0) {
      move = Math.trunc(Math.random() * 9) + 1;
      //console.log(move);

      if (array[move - 1] != 1 && array[move - 1] != 0) {
        document.querySelector(`.index${move}`).style.backgroundColor =
          "#DC143C";
        array[move - 1] = 0;
        console.log(array);
        winningMoves(array);
        break;
      }
    }
  }

  console.log("completed");
}

//player's movement!
document.querySelector(".index1").addEventListener("click", function () {
  if (
    (array[0] != 0 && array[0] != 1 && !winningMoves(array)) ||
    (array[0] != 0 && array[0] != 1 && !winningMovesBot(array))
  ) {
    document.querySelector(".index1").style.backgroundColor = "#60b347";
    array[0] = 1;
    if (checkArrayFull(array) != 1) {
      console.log("futur brenda");
      aiMovement(aiTurn());
    }
  }
});

document.querySelector(".index2").addEventListener("click", function () {
  if (
    array[1] != 0 &&
    array[1] != 1 &&
    !winningMoves(array) &&
    array[1] != 0 &&
    array[1] != 1 &&
    !winningMovesBot(array)
  ) {
    document.querySelector(".index2").style.backgroundColor = "#60b347";
    array[1] = 1;
    aiMovement(aiTurn());
  }
});
document.querySelector(".index3").addEventListener("click", function () {
  if (
    array[2] != 0 &&
    array[2] != 1 &&
    !winningMoves(array) &&
    array[2] != 0 &&
    array[2] != 1 &&
    !winningMovesBot(array)
  ) {
    document.querySelector(".index3").style.backgroundColor = "#60b347";
    array[2] = 1;
    aiMovement(aiTurn());
  }
});
document.querySelector(".index4").addEventListener("click", function () {
  if (
    array[3] != 0 &&
    array[3] != 1 &&
    !winningMoves(array) &&
    array[3] != 0 &&
    array[3] != 1 &&
    !winningMovesBot(array)
  ) {
    document.querySelector(".index4").style.backgroundColor = "#60b347";
    array[3] = 1;
    aiMovement(aiTurn());
  }
});
document.querySelector(".index5").addEventListener("click", function () {
  if (
    array[4] != 0 &&
    array[4] != 1 &&
    !winningMoves(array) &&
    array[4] != 0 &&
    array[4] != 1 &&
    !winningMovesBot(array)
  ) {
    document.querySelector(".index5").style.backgroundColor = "#60b347";
    array[4] = 1;
    aiMovement(aiTurn());
  }
});
document.querySelector(".index6").addEventListener("click", function () {
  if (
    array[5] != 0 &&
    array[5] != 1 &&
    !winningMoves(array) &&
    array[5] != 0 &&
    array[5] != 1 &&
    !winningMovesBot(array)
  ) {
    document.querySelector(".index6").style.backgroundColor = "#60b347";
    array[5] = 1;
    aiMovement(aiTurn());
  }
});
document.querySelector(".index7").addEventListener("click", function () {
  if (
    array[6] != 0 &&
    array[6] != 1 &&
    !winningMoves(array) &&
    array[6] != 0 &&
    array[6] != 1 &&
    !winningMovesBot(array)
  ) {
    document.querySelector(".index7").style.backgroundColor = "#60b347";
    array[6] = 1;
    aiMovement(aiTurn());
  }
});
document.querySelector(".index8").addEventListener("click", function () {
  if (
    array[7] != 0 &&
    array[7] != 1 &&
    !winningMoves(array) &&
    array[7] != 0 &&
    array[7] != 1 &&
    !winningMovesBot(array)
  ) {
    document.querySelector(".index8").style.backgroundColor = "#60b347";
    array[7] = 1;
    aiMovement(aiTurn());
  }
});
document.querySelector(".index9").addEventListener("click", function () {
  if (
    array[8] != 0 &&
    array[8] != 1 &&
    !winningMoves(array) &&
    array[8] != 0 &&
    array[8] != 1 &&
    !winningMovesBot(array)
  ) {
    document.querySelector(".index9").style.backgroundColor = "#60b347";
    array[8] = 1;
    aiMovement(aiTurn());
  }
});

const winningMoves = function (array) {
  //winning moves

  if (array[0] == 1 && array[1] == 1 && array[2] == 1) {
    isWinner = true;
  }
  if (array[3] == 1 && array[4] == 1 && array[5] == 1) {
    isWinner = true;
  }
  if (array[0] == 1 && array[3] == 1 && array[6] == 1) {
    isWinner = true;
  }
  if (array[1] == 1 && array[4] == 1 && array[7] == 1) {
    isWinner = true;
  }
  if (array[2] == 1 && array[5] == 1 && array[8] == 1) {
    isWinner = true;
  }
  if (array[0] == 1 && array[4] == 1 && array[8] == 1) {
    isWinner = true;
  }
  if (array[2] == 1 && array[4] == 1 && array[6] == 1) {
    isWinner = true;
  }
  if (array[6] == 1 && array[7] == 1 && array[8] == 1) {
    isWinner = true;
  }

  return isWinner;
};
const winningMovesBot = function (array) {
  //winning moves bot

  if (array[0] == 0 && array[1] == 0 && array[2] == 0) {
    isbotWinner = true;
    console.log("winner");
  }
  if (array[3] == 0 && array[4] == 0 && array[5] == 0) {
    isbotWinner = true;
    console.log("winner");
  }
  if (array[0] == 0 && array[3] == 0 && array[6] == 0) {
    isbotWinner = true;
    console.log("winner");
  }
  if (array[1] == 0 && array[4] == 0 && array[7] == 0) {
    isbotWinner = true;
    console.log("winner");
  }
  if (array[2] == 0 && array[5] == 0 && array[8] == 0) {
    isbotWinner = true;
    console.log("winner");
  }
  if (array[0] == 0 && array[4] == 0 && array[8] == 0) {
    isbotWinner = true;
    console.log("winner");
  }
  if (array[2] == 0 && array[4] == 0 && array[6] == 0) {
    isbotWinner = true;
    console.log("winner");
  }
  if (array[6] == 0 && array[7] == 0 && array[8] == 0) {
    isbotWinner = true;
    console.log("winner");
  }
  return isbotWinner;
};
//play again button

document.querySelector(".reset").addEventListener("click", function () {
  if (isWinner) alert("Player Won!");
  if (isbotWinner) alert("Bot Won!");
  winningMoves(array);
  winningMovesBot(array);
  if (isWinner) {
    humanwins++;
    document.querySelector(".player").textContent = humanwins;
  }
  if (isbotWinner && isWinner != true) {
    botwins++;
    document.querySelector(".botplayer").textContent = botwins;
  }
  isWinner = false;
  isbotWinner = false;
  //resets all the values
  for (let i = 0; i < 9; i++) {
    array[i] = 5;
    document.querySelector(`.index${i + 1}`).style.backgroundColor = "#ffffff";
    aiTurn();
  }

  console.log(humanwins, "humanwins", botwins, "botwins");
});
