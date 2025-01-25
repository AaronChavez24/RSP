// Get the elements of HTML
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

// Choices
const choices = [rock, paper, scissor];

// Function user choice
function userChoice(choice) {
  document.getElementById("user-choice").innerHTML = choice.innerHTML;
  return choice.innerHTML;
}

// Function computer choice
function computerChoice(comChoice) {
  let computerRandomChoice = Math.floor(Math.random() * comChoice.length);
  let choice = comChoice[computerRandomChoice].innerHTML;
  document.getElementById("computer-choice").innerHTML = choice;
  return choice;
}

// Game lives
let userLives = 3;
let computerLives = 3;

// Function to detect the winner
function gameCondition(userChoice, computerChoice) {
  if (
    (userChoice === "✊" && computerChoice === "✌️") ||
    (userChoice === "✌️" && computerChoice === "✋") ||
    (userChoice === "✋" && computerChoice === "✊")
  ) {
    document.getElementById("display-winner").innerHTML = "YOU WIN";
    setTimeout(function () {
      document.getElementById("display-winner").innerHTML = "";
    }, 2000);
    computerLives--;
  } else if (userChoice === computerChoice) {
    document.getElementById("display-winner").innerHTML = "DRAW";
    setTimeout(function () {
      document.getElementById("display-winner").innerHTML = "";
    }, 2000);
  } else {
    document.getElementById("display-winner").innerHTML = "COMPUTER WINS";
    setTimeout(function () {
      document.getElementById("display-winner").innerHTML = "";
    }, 2000);
    userLives--;
  }
}

// Check for game over condition
function checkGameOver() {
  if (userLives === 0) {
    document.getElementById("display-winner").innerHTML = "GAME OVER, COMPUTER WON";
    // Disable the buttons after the game is over
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    // Ask to play again
    if (confirm("GAME OVER, COMPUTER WON! Do you want to play again?")) {
      resetGame();
    }
  } else if (computerLives === 0) {
    document.getElementById("display-winner").innerHTML = "GAME OVER, YOU WON";
    // Disable the buttons after the game is over
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    // Ask to play again
    if (confirm("GAME OVER, YOU WON! Do you want to play again?")) {
      resetGame();
    }
  }
}

// Reset the game
function resetGame() {
  // Reset lives
  userLives = 3;
  computerLives = 3;
  
  // Clear the game messages
  document.getElementById("display-winner").innerHTML = "";
  document.getElementById("user-choice").innerHTML = "";
  document.getElementById("computer-choice").innerHTML = "";

  // Enable the buttons again
  rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;

  // Re-attach event listeners
  rock.addEventListener("click", rockClick);
  paper.addEventListener("click", paperClick);
  scissor.addEventListener("click", scissorClick);
}

// Define the click functions for each choice
function rockClick() {
  let userChoiceResult = userChoice(rock);
  let computerChoiceResult = computerChoice(choices);
  gameCondition(userChoiceResult, computerChoiceResult);
  setTimeout(function () {
    document.getElementById("user-choice").innerHTML = "";
    document.getElementById("computer-choice").innerHTML = "";
  }, 2000);
  checkGameOver();
}

function paperClick() {
  let userChoiceResult = userChoice(paper);
  let computerChoiceResult = computerChoice(choices);
  gameCondition(userChoiceResult, computerChoiceResult);
  setTimeout(function () {
    document.getElementById("user-choice").innerHTML = "";
    document.getElementById("computer-choice").innerHTML = "";
  }, 2000);
  checkGameOver();
}

function scissorClick() {
  let userChoiceResult = userChoice(scissor);
  let computerChoiceResult = computerChoice(choices);
  gameCondition(userChoiceResult, computerChoiceResult);
  setTimeout(function () {
    document.getElementById("user-choice").innerHTML = "";
    document.getElementById("computer-choice").innerHTML = "";
  }, 2000);
  checkGameOver();
}

// Add event listeners for rock, paper, and scissors buttons
rock.addEventListener("click", rockClick);
paper.addEventListener("click", paperClick);
scissor.addEventListener("click", scissorClick);
