//Computer generates random input via: getComputerInput(). 3 variables: Rock, Paper, and Scissors
//User inputs choice via prompt(). 3 variables: Rock, Paper, and Scissors case in-sensitive.
//User choice gets compared to computer choice (playerSelection vs compSelection) 
// if playerSelection = Rock && compSelection = Paper then return alert('You won') else alert('you lost')

const gameArray = ['rock', 'paper', 'scissor'];

function compSel() {  //Generates random output for computer between Rock, Paper, and Scissor
    let compChoice = Math.floor(Math.random()*gameArray.length);
    return (gameArray[compChoice]);
}

function playerSel () {
    let playerChoice = prompt('Choose Rock, Paper, or Scissors').toUpperCase(); //Log players choice in Uppercase 
    if (playerChoice == 'ROCK' || playerChoice == 'PAPER' || playerChoice == 'SCISSORS' ) {
        return playerChoice;
    }
    else {
        alert ('Not a valid choice')
    }
} 
        