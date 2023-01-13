
//Computer generates random input via: getComputerInput(). 3 variables: Rock, Paper, and Scissors
//User inputs choice via prompt(). 3 variables: Rock, Paper, and Scissors case in-sensitive.
//User choice gets compared to computer choice (playerSelection vs compSelection) 
// if playerSelection = Rock && compSelection = Paper then return alert('You won') else alert('you lost')

const gameArray = ['CAM', 'NUT', 'MONKEY FIST'];
const cam = document.querySelector('.cam');
const monkey = document.querySelector('.monkey');
const nut = document.querySelector('.nut');
const play = document.querySelector('.play');
const total = document.querySelector('.total');
let count = 0;


play.addEventListener('click', playRound);
cam.addEventListener('click', playerSelCam);
nut.addEventListener('click', playerSelNut);
monkey.addEventListener('click', playerSelMonkey);


function updateCount(){
    count ++
    total.textContent = 'Total Rounds: ' + count;
}


//Program that compares both input and returns the winner 
function playRound() {
    compSel();
    
    if (compChoice === playerChoice){
        alert ('You flashed your project!')
    }
    else if (compChoice == 'CAM' && playerChoice == 'MONKEY FIST' || 
            compChoice == 'NUT' && playerChoice == 'CAM' || 
            compChoice == 'MONKEY FIST' && playerChoice == 'NUT') {
        alert ('You decked! There goes your pride.');
        console.log('Computer won');
    }
    else {
        alert ('The pro catches your fall but there goes your flash.');
        console.log('You won');
    }
    updateCount();
}

//Generates random output for computer between Cam, Nut, and Monkey Fist
function compSel() {  
    let $ = Math.floor(Math.random()*gameArray.length);
    console.log(gameArray[$]); 
    return compChoice = gameArray[$]; 
}
//Associates the players click on the img with an index of the gameArray 
function playerSelCam () {
    playerChoice = gameArray[0];
    return playerChoice;
}
function playerSelNut () {
    playerChoice = gameArray[1];
    return playerChoice;
}
function playerSelMonkey () {
    playerChoice = gameArray[2];
    return playerChoice;
}
