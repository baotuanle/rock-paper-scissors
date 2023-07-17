const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const choices = [rock, paper, scissors];
let playerScore = 0;
let computerScore = 0;

const playAgainButton = document.querySelector(".playagain")
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", getPlayerSelection);
});

function resetGame() {
    playAgainButton.style.visibility = 'visible';
    playAgainButton.addEventListener('click', () => {
      window.location.reload();
    });
  }

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function getPlayerSelection() {
    playRound(this.id, getComputerChoice());
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        return; 
    }

    if (playerSelection.toLowerCase() === rock) {
        if (computerSelection === rock) {
            document.getElementById("result").textContent = "There is a tie! You both chose Rock.";
        } else if (computerSelection === paper) {
            computerScore++;
            document.getElementById("computerscore").textContent = `Computer: ${computerScore}`;
            document.getElementById("result").textContent = "You lose! Paper beats Rock.";
        } else {
            playerScore++;
            document.getElementById("playerscore").textContent = `Player: ${playerScore}`;
            document.getElementById("result").textContent = "You win! Rock beats Scissors.";
        }
    } else if (playerSelection.toLowerCase() === paper) {
        if (computerSelection === rock) {
            playerScore++;
            document.getElementById("playerscore").textContent = `Player: ${playerScore}`;
            document.getElementById("result").textContent = "You win! Paper beats Rock.";
        } else if (computerSelection === paper) {
            document.getElementById("result").textContent = "There is a tie! You both chose Paper.";
        } else {
            computerScore++;
            document.getElementById("computerscore").textContent = `Computer: ${computerScore}`;
            document.getElementById("result").textContent = "You lose! Scissors beats Paper.";
        }
    } else if (playerSelection.toLowerCase() === scissors) {
        if (computerSelection === rock) {
            computerScore++;
            document.getElementById("computerscore").textContent = `Computer: ${computerScore}`;
            document.getElementById("result").textContent = "You lose! Rock beats Scissors";
        } else if (computerSelection === paper) {
            playerScore++;
            document.getElementById("playerscore").textContent = `Player: ${playerScore}`;
            document.getElementById("result").textContent = "You Win! Scissors beats Paper.";
        } else {
            document.getElementById("result").textContent = "There is a tie! You both chose Scissors.";
        }
    }

    if (playerScore === 5) {
        document.getElementById("result").textContent = "You Win! You were the first to get 5 points!";
        disableButtons();
        resetGame();
    } else if (computerScore === 5) {
        document.getElementById("result").textContent = "You Lost! The Computer got 5 points before you!";
        disableButtons();
        resetGame();
    }

    
}