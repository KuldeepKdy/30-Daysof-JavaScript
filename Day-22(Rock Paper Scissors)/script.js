const buttons = document.querySelectorAll("button");
const resultElement = document.querySelector("#result");

let playerScore = 0;
let computerScore = 0;

const playerScoreE1 = document.getElementById("user-score");
const computerScoreE1 = document.getElementById("computer-score");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.id, computerPlay());
    const result = playRound(button.id, computerPlay());
    // console.log(result);
    resultElement.textContent = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreE1.textContent = playerScore;
    return "You Win " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreE1.textContent = computerScore;
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}
