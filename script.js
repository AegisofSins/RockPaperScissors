
//Computer generates random input via: getComputerInput(). 3 variables: Rock, Paper, and Scissors
//User inputs choice via prompt(). 3 variables: Rock, Paper, and Scissors case in-sensitive.
//User choice gets compared to computer choice (playerSelection vs compSelection) 
// if playerSelection = Rock && compSelection = Paper then return alert('You won') else alert('you lost')

//?????????????????????????????
//Game doesn't stop at 5 rounds but rather keeps going until player or computer reaches 5 which can be within 7 rounds 
//Selection is made once, game keeps in stored and allows the player to press play without selecting anything using the last value as default 

const gameArray = ['CAM', 'NUT', 'MONKEY FIST'];
const cam = document.querySelector('.cam');
const monkey = document.querySelector('.monkey');
const nut = document.querySelector('.nut');
const play = document.querySelector('.play');
const total = document.querySelector('.total');

let playerChoice;
let rounds = 0;
let computerCount = 0;
let playerCount = 0;

play.addEventListener('click', playRound);

//Associates the players click on the img with an index of the gameArray
cam.addEventListener('click', () => {
    cam.classList.toggle('imgHover');
    playerChoice = gameArray[0];
    return playerChoice;
})
nut.addEventListener('click', () => {
    nut.classList.toggle('imgHover');
    playerChoice = gameArray[1];
    return playerChoice;
})
monkey.addEventListener('click', () => {
    monkey.classList.toggle('imgHover');
    playerChoice = gameArray[2];
    return playerChoice;
})

//Generates random output for computer between Cam, Nut, and Monkey Fist
function compSel() {  
    let index = Math.floor(Math.random()*gameArray.length);
    return compChoice = gameArray[index]; 
}

//Program that compares both input and returns the winner 
function playRound() {
    compSel();
    
        if (compChoice === playerChoice){
            alert ('You flashed your project! without falling!')
            playerCount ++ && computerCount ++
        }
        else if (compChoice == 'CAM' && playerChoice == 'MONKEY FIST' || 
        compChoice == 'NUT' && playerChoice == 'CAM' || 
        compChoice == 'MONKEY FIST' && playerChoice == 'NUT') {
            alert ('You decked! There goes your pride.');
            computerCount ++;
        }
        else {
            alert ('The pro catches your fall but there goes your flash.');
            playerCount ++;  
        }
        playerChoice = '';
        updateRounds();
    
    cam.classList.remove('imgHover');
    nut.classList.remove('imgHover');
    monkey.classList.remove('imgHover');
}

//Updates the total amount of rounds and updates the HTML text
function updateRounds(){
    rounds ++
    total.textContent = 'Total Rounds: ' + rounds;
}



