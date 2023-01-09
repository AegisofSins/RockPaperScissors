//Computer generates random input via: getComputerInput(). 3 variables: Rock, Paper, and Scissors
//User inputs choice via prompt(). 3 variables: Rock, Paper, and Scissors case in-sensitive.
//User choice gets compared to computer choice (playerSelection vs compSelection) 
// if playerSelection = Rock && compSelection = Paper then return alert('You won') else alert('you lost')

// const gameArray = ['ROCK', 'PAPER', 'SCISSORS'];


//Computer Selection that is random using the above declared array 
playRound();

//Program that compares both input and returns the winner 
function playRound() {
    compSel();
    playerSel();
    
    if (compChoice === playerChoice){
        alert ('Tie!')
        }
    else if (compChoice == 'CAM' && playerChoice == 'MONKEY FIST' || 
            compChoice == 'NUT' && playerChoice == 'CAM' || 
            compChoice == 'MONKEY FIST' && playerChoice == 'NUT') {
                alert ('You decked! There goes your pride.');
                console.log('Computer won');
            }
    else {
        alert ('The pro catches your fall. There goes your flash.');
        console.log('You won');
    }
}

//Generates random output for computer between Cam, Nut, and Monkey Fist
function compSel() {  
    const gameArray = ['CAM', 'NUT', 'MONKEY FIST'];
    let $ = Math.floor(Math.random()*gameArray.length);
    console.log(gameArray[$]); 
    return compChoice = gameArray[$]; 
}

//Player Selection using a prompt and assigning it to a variable 
function playerSel () {
    playerChoice = //Log players choice in Uppercase 
    if (playerChoice == 'CAM' || playerChoice == 'NUT' || playerChoice == 'MONKEY FIST' ) { //Verifies that user entry is True
        console.log(playerChoice);
        return playerChoice;
    }
    else {
        alert ('Not a valid choice')
        return playerSel()
    }
    
} 