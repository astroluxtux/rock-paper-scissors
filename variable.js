const myArray = ["Rock", "Paper", "Scissors"];

function myComputerChoice() {
    console.log(myArray[(Math.floor(Math.random() * myArray.length))]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        return "Tie Game! Rock cancels out Rock! Replay round."
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Paper!"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock!"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        return "Tie Game! Paper cancels out Paper! Replay round."
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        return "Tie Game! Scissors cancels out Scissors! Replay round."
    } else (playerSelection === "") 
        return "Please make a valid selection."
}
