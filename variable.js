const myArray = ["Rock", "Paper", "Scissors"];

function myComputerChoice() {
    console.log(myArray[(Math.floor(Math.random() * myArray.length))]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock!"
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "Tie Game! Rock cancels out Rock!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Paper!"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock!"
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "Tie Game! Paper cancels out Paper!"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper!"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors!"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper!"
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "Tie Game! Scissors cancels out Scissors!"
    } else (playerSelection === "") {
        return "Please make a valid selection."
    }
 }