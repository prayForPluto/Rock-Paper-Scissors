function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    rounds += 1;

    if (playerSelection.toUpperCase() === "rock".toUpperCase()) {
        if (computerSelection === "rock") {
            return "It is a tie.";
        } else if (computerSelection === "paper") {
            computerWins += 1;
            return "You lose! Paper beats rock.";
        } else {
            personWins += 1;
            return "You win! Rock beats scissors.";
        }
    } 

    if (playerSelection.toUpperCase() === "paper".toUpperCase()) {
        if (computerSelection === "rock") {
            personWins += 1;
            return "You win! Paper beats rock";
        } else if (computerSelection === "paper") {
            return "It is a tie.";
        } else {
            computerWins += 1;
            return "You lose! Scissors beats paper.";
        }
    }

    if (playerSelection.toUpperCase() === "scissors".toUpperCase()) {
        if (computerSelection === "rock") {
            computerWins += 1;
            return "You lose! Rock beats scissors.";
        } else if (computerSelection === "paper") {
            personWins += 1;
            return "You win! Scissors beats paper.";
        } else {
            return "It is a tie.";
        }
    }
}

/*function game() {
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, or scissors?")
        console.log(playRound(playerSelection, computerSelection));
    }
} */

let playerSelection;
const computerSelection = getComputerChoice();

let body = document.querySelector("body");

let rockButton = document.createElement("button");
rockButton.setAttribute("class", "rock");
rockButton.textContent = "Rock";

let paperButton = document.createElement("button");
paperButton.setAttribute("class", "paper");
paperButton.textContent = "Paper";

let scissorsButton = document.createElement("button");
scissorsButton.setAttribute("class", "scissor");
scissorsButton.textContent = "Scissors";

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

let winBanner = document.createElement("p");
body.appendChild(winBanner);

let rounds = 0;
let computerWins = 0;
let personWins = 0;

rockButton.addEventListener("click", () => {
    winBanner.textContent = playRound("rock", getComputerChoice());
    checkWin();
    console.log(computerWins);
    console.log(rounds);
} )

paperButton.addEventListener("click", () => {
    winBanner.textContent = playRound("paper", getComputerChoice());
    checkWin();
    console.log(computerWins);
    console.log(rounds);
})

scissorsButton.addEventListener("click", () => {
    winBanner.textContent = playRound("scissors", getComputerChoice());
    checkWin();
    console.log(computerWins);
    console.log(rounds);
})


function checkWin() {
    if (rounds >= 5 && computerWins > personWins) {
        winBanner.textContent = "The computer is the supreme ruler!"
        rounds = 0;
        computerWins = 0;
        personWins = 0;
    } else if (rounds >= 5 && personWins > computerWins) {
        winBanner.textContent = "The person is the supreme ruler!"
        rounds = 0;
        computerWins = 0;
        personWins = 0;
    }
    
}