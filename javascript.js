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


let comp = getComputerChoice();
console.log(comp);
console.log(playRound(playerSelection(), comp));


