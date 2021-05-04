const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

console.log(computerPlay().toLowerCase());

let playerChoice = prompt("Rock, Paper, or Scissors");

function playerPlay() { 
    return console.log(playerChoice.toLowerCase());
}

playerPlay();

function computerSeleciton() {
    return computerPlay().toLowerCase();
}

function playerSelection() {
    return playerPlay().toLowerCase();
}


function declareWinner(computerSelection, playerSelection) {
    computerSelection;
    playerSelection;
    if (computerSeleciton == playerSelection) {
        console.log("Its a tie game");
    } else if (computerSeleciton == "scissors" && playerSelection == "paper") {
        console.log("Computer Wins");
    } else if (computerSeleciton == "rock" && playerSelection == "paper") {
        console.log("Player Wins");
    } else if (computerSeleciton == "rock" && playerSelection == "scissors") {
         console.log("Computer Wins");
    } else if (computerSeleciton == "paper" && playerSelection == "scissors") {
         console.log("Player Wins");
    } else if (computerSeleciton == "paper" && playerSelection == "rock") {
         console.log("Computer Wins");
    } else if (computerSeleciton == "scissors" && playerSelection == "rock") {
        console.log("Player Wins");
    } else console.log("Not working properly");
    }


declareWinner(computerSeleciton, playerSelection);
