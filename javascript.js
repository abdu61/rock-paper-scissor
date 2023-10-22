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

let score = 0;
let cscore = 0;

function getPlayerScore(){
    return score;
}

function getComputerScore(){
    return cscore;
}

const btn = document.querySelectorAll('.rps');
const result = document.querySelector('#result');
const outcome = document.querySelector('#outcome');
result.textContent = "Player: " + getPlayerScore() + '\t' + '\t' + " Computer: " + getComputerScore();

btn.forEach((button) => {
    button.addEventListener('click', () => {
        let player = button.id;
        let comp = getComputerChoice();
        let round = playRound(player, comp);

        if(round.includes("win")){
            score++;
        }
        else if(round.includes("lose")){
            cscore++;
        }
        outcome.textContent = round;
        result.textContent = "Player: " + getPlayerScore() + " Computer: " + getComputerScore();
        resultReset();
    });
});

function resultReset(){
    if(score == 5){
        result.textContent = "You win the game!";
        confirm("You Won, Do You want to Play Again?");
        outcome.textContent = "Choose Your Weapon";
        score = 0;
        cscore = 0;
        result.textContent = "Player: " + getPlayerScore() + " Computer: " + getComputerScore();
    }
    else if(cscore == 5){
        result.textContent = "You lose the game!";
        confirm("You Lose, Do you want to Play Again?");
        outcome.textContent = "Choose Your Weapon";
        score = 0;
        cscore = 0;
        result.textContent = "Player: " + getPlayerScore() + " Computer: " + getComputerScore();
    }
}