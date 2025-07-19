//constants
const picks = ["rock", "paper", "scissors"];
const rockPick = document.getElementsByClassName("rock__button");
const paperPick = document.getElementsByClassName("paper__button");
const scissorsPick = document.getElementsByClassName("scissors__button");
const userScoreCount = document.getElementsByClassName("userScoreCount__div");
const compScoreCount = document.getElementsByClassName("compScoreCount__div");
const result = document.getElementsByClassName("winLossMess__h3");

let userScore = 0;
let compScore = 0;


function playRPS(playerChoice){
    const computerChoice = picks[Math.floor(Math.random() * 3)];
    let rockPick = picks ['rock'];
    let paperPick = picks ['paper'];
    let scissorsPick = picks ['scissors'];
    let result = ""
    console.log(computerChoice); //tests if computer works
}

if (picks == "rock" && computerChoice == "scissors") {
    alert("Good Pick!");
    userScore +=1;

} else if (picks == "paper" && computerChoice == "rock"){
    alert("Good Pick!");
    userScore +=1;

} else if (picks == "scissors" && computerChoice == "paper"){
    alert("Good Pick!");    
    userScore +=1;

} else if (picks == "rock" && computerChoice == "paper") {
    alert("Good Pick!");
    compScore +=1;

} else if (picks == "paper" && computerChoice == "scissors"){
    alert("Good Pick!");
    compScore +=1;

} else if (picks == "scissors" && computerChoice == "rock"){
    alert("Good Pick!");    
    compScore +=1;

} else {
    alert("Thats a Tie!");
}