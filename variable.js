const myArray = ["Rock", "Paper", "Scissors"];

function myComputerChoice() {
    console.log(myArray[(Math.floor(Math.random() * myArray.length))]);
}