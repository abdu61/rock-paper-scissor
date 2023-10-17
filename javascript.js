function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


function playerSelection() {
    let playerChoice = prompt("Choose rock, paper or scissors");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    }
    else {
        alert("Invalid input");
        playerSelection();
    }
}


function playRound(player, computer) {
    if(computer === "rock")
    {
        if(player === "scissors")
        {
            return "You lose! Rock beats scissors";
        }
        else if(player === "paper")
        {
            return "You win! Paper beats rock";
        }
        else
        {
            return "It's a tie!";
        }
    }   
    else if(computer === "paper")
    {
        if(player === "rock")
        {
            return "You lose! Paper beats rock";
        }
        else if(player === "scissors")
        {
            return "You win! Scissors beats paper";
        }
        else
        {
            return "It's a tie!";
        }
    }
    else 
    {
        if(player === "paper")
        {
            return "You lose! Scissors beats paper";
        }
        else if(player === "rock")
        {
            return "You win! Rock beats scissors";
        }
        else
        {
            return "It's a tie!";
        }
    }
    
}

function game(){
    let score = 0;
    let cscore = 0;
    for(let i=0; i<5; i++){
        let comp = getComputerChoice();
        let player = playerSelection();
        let result = playRound(player, comp);
        console.log(result);
        if(result.includes("win")){
            score++;
        }
        else if(result.includes("lose")){
            cscore++;
        }
    }
    if (score < cscore){
        return "You lose the round!";
    }
    else if (score > cscore){
        return "You win the round!";
    }
    else{
        return "It's a tie round!";
    }
}

console.log(game());
