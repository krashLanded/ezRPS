const container = document.querySelector('.container');
const buttonStart = document.createElement('button');
const gameArea = document.createElement('div');
const rockButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const paperButton = document.createElement('button');
const buttonChoices = document.createElement('div');
const playerScore = document.createElement('div');
const computerScore = document.createElement('div');

gameArea.classList.add('gameArea');
gameArea.textContent = 'Rock, paper, or scissors?';

buttonChoices.classList.add('buttonChoices');

playerScore.classList.add('playerScore');
computerScore.classList.add('computerScore');


buttonStart.classList.add('buttonStart');
buttonStart.textContent = 'Click to start!';
container.appendChild(buttonStart);

let playerScoreLive = 0;
let computerScoreLive = 0;

paperButton.classList.add('paperButton');
scissorsButton.classList.add('scissorsButton');
rockButton.classList.add('rockButton');
paperButton.textContent = 'Paper!';
scissorsButton.textContent = 'Scissors!';
rockButton.textContent = 'Rock!';
playerScore.textContent = "Your score: " + playerScoreLive;
computerScore.textContent = "Their score: " + computerScoreLive;
gameArea.textContent = 'First to 5 wins the game!';

buttonStart.addEventListener('click', () => {
    buttonStart.remove();
    alert('Welcome to ezRPS! First to 5 points wins!');
    container.appendChild(gameArea);
    gameArea.appendChild(buttonChoices);
    buttonChoices.appendChild(rockButton);
    buttonChoices.appendChild(paperButton);
    buttonChoices.appendChild(scissorsButton);
    gameArea.appendChild(playerScore);
    gameArea.appendChild(computerScore);

});

function computerDecision() {
    randomChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    return randomChoice.toLowerCase();
    };

rockButton.addEventListener('click', () => {for (let i=0;i<1;i++) {
    rockRoundPlay('rock',computerDecision())
    }
});

paperButton.addEventListener('click', () => {for (let i=0;i<1;i++) {
    paperRoundPlay('paper',computerDecision())
    }
});
scissorsButton.addEventListener('click', () => {for (let i=0;i<1;i++) {
    scissorsRoundPlay('scissors',computerDecision())
    }
});
