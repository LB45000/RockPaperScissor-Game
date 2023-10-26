// Global variables
let computerScore = 0;
let userScore = 0;
let round = 0;

// Function to get user's choice
function getUserChoice() {
    let userSelection = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();
    if (userSelection === "rock" || userSelection === "paper" || userSelection === "scissors") {
        return userSelection;
    } else {
        alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
        return getUserChoice();
    }
}

// Function to get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to compare choices and determine the winner
function compareChoices(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${userChoice}.`;
    }
}

// Function to play the game
function playGame() {
    while (userScore < 2 && computerScore < 2) {
        round++;
        alert(`Round ${round}\nUser: ${userScore}  Computer: ${computerScore}`);
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        const roundResult = compareChoices(userChoice, computerChoice);
        alert(roundResult);
    }
    if (userScore > computerScore) {
        alert("You win the game!");
    } else {
        alert("Computer wins the game!");
    }
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => {
    playGame();
});
document.getElementById("paper").addEventListener("click", () => {
    playGame();
});
document.getElementById("scissors").addEventListener("click", () => {
    playGame();
});
