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
    if (playerSelection.toUpperCase() === "rock".toUpperCase()) {
        if (computerSelection === "rock") {
            return "It is a tie.";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } 

    if (playerSelection.toUpperCase() === "paper".toUpperCase()) {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock";
        } else if (computerSelection === "paper") {
            return "It is a tie.";
        } else {
            return "You lose! Scissors beats paper.";
        }
    }

    if (playerSelection.toUpperCase() === "scissors".toUpperCase()) {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        } else if (computerSelection === "paper") {
            return "You win! Scissors beats paper.";
        } else {
            return "It is a tie.";
        }
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, or scissors?")
        console.log(playRound(playerSelection, computerSelection));
    }
}

let playerSelection;
const computerSelection = getComputerChoice();

game();

