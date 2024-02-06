const myArray = ["rock", "paper", "scissors"];

function myComputerChoice() {
    const computerChoice = myArray[(Math.floor(Math.random() * myArray.length))]
    console.log(computerChoice);
    return computerChoice;
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;

    function logScore() {
        console.log(`Score - User: ${userScore}, Computer: ${computerScore}`)
    }

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase()
        computerSelection = computerSelection.toLowerCase()

        // If the user makes an invalid selection
        if (!playerSelection || myArray.indexOf(playerSelection) === -1) {
            console.log("Please make a valid selection.")
        }

        // If the user and computer make the same selection
        if (playerSelection === computerSelection) {
            console.log(`Tie Game! ${playerSelection} cancels out ${computerSelection}! Replay round.`)
            logScore()
        }

        // If the user chooses rock
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                // User won, increment user score
                userScore++
                console.log("You Win! Rock beats Scissors!")
                logScore()
            } else if (computerSelection === 'paper') {
                // Computer won, increment user score
                computerScore++
                console.log("You Lose! Paper beats Rock!")
                logScore()
            }
        }

        // If the user chooses paper
        if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                userScore++
                console.log("You Win! Paper beats Rock!")
                logScore()
            } else if (computerSelection === 'scissors') {
                computerScore++
                console.log("You Lose! Scissors beats Paper!")
                logScore()
            }
        }

        // If the user chooses scissors
        if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                userScore++
                console.log("You Win! Scissors beats Paper!")
                logScore()
            } else if (computerSelection === 'rock') {
                computerScore++
                console.log("You Lose! Rock beats Scissors!")
                logScore()
            }
        }
    }

    // Round 1
    let playerSelection = prompt('Enter your choice:')
    playRound(playerSelection, myComputerChoice())

    // Round 2
    playerSelection = prompt('Enter your choice:')
    playRound(playerSelection, myComputerChoice())

    // Round 3
    playerSelection = prompt('Enter your choice:')
    playRound(playerSelection, myComputerChoice())

    // Round 4
    playerSelection = prompt('Enter your choice:')
    playRound(playerSelection, myComputerChoice())

    // Round 5
    playerSelection = prompt('Enter your choice:')
    playRound(playerSelection, myComputerChoice())
}
