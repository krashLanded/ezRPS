const gameChoices = [
    "Rock",
    "Paper",
    "Scissors"
];


function rockRoundPlay(playerMove, computerMove) {
    if (playerMove == "rock" && computerMove == "rock") {
        alert('Tie! They also chose rock.')
    } else if (playerMove == "rock" && computerMove == "paper") {
        alert('You lose. They chose paper!')
    } else if (playerMove == "rock" && computerMove == "scissors") {
        alert('You win! They chose scissors.')
    }
    }
function paperRoundPlay(playerMove, computerMove) {
    if (playerMove == "paper" && computerMove == "rock") {
        alert('You win! They chose rock.')
    } else if (playerMove == "paper" && computerMove == "paper") {
        alert('Tie! They also chose paper.')
    } else if (playerMove == "paper" && computerMove == "scissors") {
        alert('You lose. They chose scissors!')
    }
    }
function scissorsRoundPlay(playerMove, computerMove) {
    if (playerMove == "scissors" && computerMove == "rock") {
        alert('You lose. They chose rock!')
    } else if (playerMove == "scissors" && computerMove == "paper") {
        alert('You win! They chose paper.')
    } else if (playerMove == "scissors" && computerMove == "scissors") {
        alert('Tie! They also chose scissors.')
    }
    }
    

  




