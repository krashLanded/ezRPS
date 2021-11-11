const gameChoices = [
    "Rock",
    "Paper",
    "Scissors"
];

function rockRoundPlay(playerMove, computerMove) {
    if (playerMove == "rock" && computerMove == "rock") {
        alert('Tie! They also chose rock.')
    } else if (playerMove == "rock" && computerMove == "paper") {
        alert('You lose. They chose paper!');
        computerScoreLive += 1;
        computerScore.innerHTML = "Their score: " + computerScoreLive;
        checkScore();
    } else if (playerMove == "rock" && computerMove == "scissors") {
        alert('You win! They chose scissors.');
        playerScoreLive += 1;
        playerScore.innerHTML = "Your score: "+ playerScoreLive;
        checkScore();

    }
    }
function paperRoundPlay(playerMove, computerMove) {
    if (playerMove == "paper" && computerMove == "rock") {
        alert('You win! They chose rock.');
        playerScoreLive += 1;
        playerScore.innerHTML = "Your score: "+ playerScoreLive;
        checkScore();
    } else if (playerMove == "paper" && computerMove == "paper") {
        alert('Tie! They also chose paper.')
    } else if (playerMove == "paper" && computerMove == "scissors") {
        alert('You lose. They chose scissors!');
        computerScoreLive += 1;
        computerScore.innerHTML = "Their score: " + computerScoreLive;
        checkScore();
    }
    }
function scissorsRoundPlay(playerMove, computerMove) {
    if (playerMove == "scissors" && computerMove == "rock") {
        alert('You lose. They chose rock!');
        computerScoreLive += 1;
        computerScore.innerHTML = "Their score: " + computerScoreLive;
        checkScore();
    } else if (playerMove == "scissors" && computerMove == "paper") {
        alert('You win! They chose paper.');
        playerScoreLive += 1;
        playerScore.innerHTML = "Your score: "+ playerScoreLive;
        checkScore();
    } else if (playerMove == "scissors" && computerMove == "scissors") {
        alert('Tie! They also chose scissors.')
    }
    }

function checkScore() {
    if (playerScoreLive == 5) {
        alert('You Win!');
    } else if (computerScoreLive == 5) {
        alert('You Lose!')
    }
}



