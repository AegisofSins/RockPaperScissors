//Computer generates random input via: getComputerInput(). 3 variables: Rock, Paper, and Scissors
//User inputs choice via prompt(). 3 variables: Rock, Paper, and Scissors case in-sensitive.
//User choice gets compared to computer choice (playerSelection vs compSelection) 
// if playerSelection = Rock && compSelection = Paper then return alert('You won') else alert('you lost')

// const gameArray = ['ROCK', 'PAPER', 'SCISSORS'];


//Computer Selection that is random using the above declared array ///////////////////////////////////////////////
playRound();

function compSel() {  //Generates random output for computer between Rock, Paper, and Scissor
    const gameArray = ['ROCK', 'PAPER', 'SCISSORS'];
    let $ = Math.floor(Math.random()*gameArray.length);
    console.log(gameArray[$]); 
    return compChoice = gameArray[$]; 
}

//Player Selection using a prompt and assigning it to a variable //////////////////////////////////////////////////

function playerSel () {
    playerChoice = prompt('Choose Rock, Paper, or Scissors').toUpperCase(); //Log players choice in Uppercase 
    if (playerChoice == 'ROCK' || playerChoice == 'PAPER' || playerChoice == 'SCISSORS' ) { //Verifies that user entry is True
        console.log(playerChoice);
        return playerChoice;
    }
    else {
        alert ('Not a valid choice')
        return playerSel()
    }
    
} 

//Program that compares both input and returns the winner 

function playRound() {
    for (let i=1; i<=5; i++){
    compSel();
    playerSel();
    console.log(i)
    if (compChoice === playerChoice){
        alert ('Tie!')
    console.log('Tie') }
    else if (compChoice == 'ROCK' && playerChoice == 'SCISSORS' || 
            compChoice == 'PAPER' && playerChoice == 'ROCK' || 
            compChoice == 'SCISSORS' && playerChoice == 'PAPER') {
                alert ('Computer won');
                console.log('Computer won');
            }
    else {
        alert ('You won!');
        console.log('You won');
    }}
}

        