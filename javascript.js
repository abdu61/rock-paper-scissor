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


const computerPlay = document.querySelector('#computerInput');
const playerPlay = document.querySelector('#playerInput');
function playRound(player, computer) {
    if(computer === "rock")
    {
        computerPlay.textContent = "✊";
        if(player === "scissors")
        {
            playerPlay.textContent = "✌️";
            return "You lose! Rock beats scissors";
        }
        else if(player === "paper")
        {
            playerPlay.textContent = "✋";
            return "You win! Paper beats rock";
        }
        else
        {
            playerPlay.textContent = "✊";
            return "It's a tie!";
        }
    }   
    else if(computer === "paper")
    {
        computerPlay.textContent = "✋";
        if(player === "rock")
        {
            playerPlay.textContent = "✊";
            return "You lose! Paper beats rock";
        }
        else if(player === "scissors")
        {
            playerPlay.textContent = "✌️";
            return "You win! Scissors beats paper";
        }
        else
        {
            playerPlay.textContent = "✋";
            return "It's a tie!";
        }
    }
    else 
    {
        computerPlay.textContent = "✌️";
        if(player === "paper")
        {
            playerPlay.textContent = "✋";
            return "You lose! Scissors beats paper";
        }
        else if(player === "rock")
        {
            playerPlay.textContent = "✊";
            return "You win! Rock beats scissors";
        }
        else
        {
            playerPlay.textContent = "✌️";
            return "It's a tie!";
        }
    }
    
}


let score = 0;
let cscore = 0;
const btn = document.querySelectorAll('.rps');
const outcome = document.querySelector('#outcome');
const pScore = document.querySelector('#playerScoreNumber');
const cScore = document.querySelector('#computerScoreNumber');

/* button funtion that decides the winner\loser of the round and updates the score */
btn.forEach((button) => {
    button.addEventListener('click', () => {
        let player = button.id;
        let comp = getComputerChoice();
        let round = playRound(player, comp);

        if(round.includes("win")){
            score++;
            pScore.textContent = score;
        }
        else if(round.includes("lose")){
            cscore++;
            cScore.textContent = cscore;
        }
        outcome.textContent = round;
        if(score == 5 || cscore == 5)
        {
            resultReset();
        }
    });
});


function resultReset(){
    if(score == 5){
        confirm("You Won, Do You want to Play Again?");
    }
    else{
        confirm("You Lose, Do you want to Play Again?");
    }

    outcome.textContent = "Choose Your Weapon";
    score = 0;
    cscore = 0;
    pScore.textContent = score;
    cScore.textContent = cscore;
    playerPlay.textContent = "?";
    computerPlay.textContent = "?";
}