//constants
const picks = ["rock", "paper", "scissors"];
const userPick = document.getElementById("userPick__h3");
const compPick = document.getElementById("compPick__h3");
const result = document.getElementById("winLossMess__h2");
const userScoreTotal = document.getElementById("userScoreCount__h3");
const compScoreTotal = document.getElementById("compScoreCount__h3");
const wins = document.getElementById("winCount__h3");
const losses = document.getElementById("lossCount__h3");
const ties = document.getElementById("tieCount__h3");
let winCount = 0;
let lossCount = 0;
let tieCount = 0;

function playRPS(userChoice){
    // shuffles the picks for the computer
    const computerChoice = picks[Math.floor(Math.random() * 3)];
    let message = "";
    
    // determines if the round is a tie, win or loss
    if (userChoice == computerChoice){
        message = "TIE!"
    }
    else {
        switch(userChoice){
            case "rock":
                message = (computerChoice == "scissors") ? "You WON!" : "You lost :(";
                break;
            case "paper":
                message = (computerChoice == "rock") ? "You WON!" : "You lost :(";
                break;
            case "scissors":
                message = (computerChoice == "paper") ? "You WON!" : "You lost :(";
                break;
        }
    }

    // adds win/loss/tie message to screen and shows what the user & computer message chose
    userPick.textContent = `You Picked: ${userChoice}`;
    compPick.textContent = `You Picked: ${computerChoice}`;
    result.textContent = message;

    // count all the user's wins, losses, & ties
    switch (message) {
        case "You WON!":
            winCount++;
            break;
        case "You lost :(":
            lossCount++;
            break;
        case "TIE!":
            tieCount++;
            break;
    }

    wins.textContent = `Wins: ${winCount}`;
    losses.textContent = `Losses: ${lossCount}`;
    ties.textContent = `Ties: ${tieCount}`;

}