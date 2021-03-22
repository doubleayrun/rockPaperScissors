function computerPlay(){
    let seedNum = Math.floor(Math.floor(3) * Math.random());
    let throwResult;
    if (seedNum == 2){
        throwResult = "rock";
    }
    else if (seedNum == 1){
        throwResult = "paper";
    }
    else {
        throwResult = "scissors";
    }
    return throwResult;
}

function roshambo(computerSelection, playerSelection){
    playerSelection.toLowerCase();
    if (computerSelection == playerSelection){
        return "Tie game!";
    }
    else if ((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock")){
        return "Player wins!";
    }
    else {
        return "Computer wins!";
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(roshambo(computerPlay(), window.prompt("Roshambo!", " ")));
    }
}