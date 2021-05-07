const gameOptions = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;
let cpuWinRound = "Computer Wins";
let playerWinRound = "Player Wins";
let tieRound = "Its a tie game";
let cpuWinsGame = "Computer WINS THE GAME... Better Luck Next Time";
let playerWinsGame = "YOU WIN!!! YOU ROCK!!"


main();

function main() {
  printValue("Hello welcome to the game!");

  for (let i = 0; i < 1000; i++) {
    const playerChoice = playerPlay();
    const computerChoice = computerPlay();

    printValue(declareWinner(computerChoice, playerChoice));
    gameScore();
    printValue("Finished round: " + (i + 1));
    printValue("Your Score is: " + playerScore);
    printValue("Computer Score is: " + computerScore);
    endCredits();

    function gameScore() {
      let result = declareWinner(computerChoice, playerChoice);
    
      if (result === playerWinRound) {
        playerScore++;
      } else if (result === cpuWinRound) {
        computerScore++;
      } else { playerScore, computerScore;
      }
    }

    function endCredits() {
      if (playerScore === 5) {
        console.log(playerWinsGame);
        return;
      }
      if (computerScore === 5) {
        console.log(cpuWinsGame);
        return;
      }
    }
  

    if(computerScore === 5 || playerScore ===5) {
      break;
    }
  }

  printValue("Thanks for playing");

}



function printValue(value) {
  console.log(value);
}

function computerPlay() {
  const index = Math.floor(Math.random() * gameOptions.length);
  printValue("Computers choice: " + gameOptions[index]);
  return gameOptions[index];
}

function playerPlay() {
  const playerChoice = prompt("Rock, Paper, or Scissors");
  printValue("Players choice: " + playerChoice);

  return playerChoice.toLowerCase();
}

function declareWinner(computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    return tieRound;
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    return cpuWinRound;
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    return playerWinRound;
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    return cpuWinRound;
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    return playerWinRound;
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    return cpuWinRound;
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    return playerWinRound;
  } else return("Not working properly");
}
