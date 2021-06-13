const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};
const choiceDisplay = document.querySelector('.choiceDisplay');
const instructions = document.querySelector('.instructions');
const endGame = document.querySelector('.endGame');
const scoreBoarder = document.querySelector('.score-border');
const playerWins = "CONGRATS, You Win!! "
const compWins = "Oh No, You lost! Better Luck Next Time!"


// Play game
function play(e) {
  restart.style.display = 'inline-block';
  choiceDisplay.style.display="grid";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
  ResetDivs();
  if(scoreboard.player === 5 || scoreboard.computer === 5) {
  endGameDisplay();
  }
}

// Get computers choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get game winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    // Inc player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === 'computer') {
    // Inc computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } else {
    result.innerHTML = `
      <h1>It's A Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
    }

  // Show score //
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
}

// Restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
  
  instructions.style.display = "block";
  endGame.style.display = "none";
  restart.style.display="none";
  scoreBoarder.style.display="block";
  choiceDisplay.style.display="none";
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);

// New End of Game Display 
function endGameDisplay() { 
    restart.innerHTML = "New Game";
    if(scoreboard.player === 5) {
      endGame.style.color = "green";
      endGame.innerHTML = `
        <p>${playerWins}</p>
        <p class="thanks"> Thank you for playing!!</p>
        `
    } else {
      endGame.style.color = "#990000";
      endGame.innerHTML = `
        <p>${compWins}</p>
        <p class="thanks"> Thank you for playing!!</p>
        `
    }
    endGame.style.display = "block";
    choiceDisplay.style.display = "none";
    instructions.style.display = "none";
    scoreBoarder.style.display = "none";
}

//Reset Div Styles 
function ResetDivs() {
  restart.innerHTML="Restart Game";
  endGame.style.display = "none";
  choiceDisplay.style.display = "block";
  instructions.style.display = "none";
  scoreBoarder.style.display = "block";
}
