
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
    }
    else if (compChoice == 'CAM' && playerChoice == 'MONKEY FIST' || 
    compChoice == 'NUT' && playerChoice == 'CAM' || 
    compChoice == 'MONKEY FIST' && playerChoice == 'NUT') {
        alert ('You decked! There goes your pride.');
    }
    else {
        alert ('The pro catches your fall but there goes your flash.');  
    }
    updateCount();
    cam.classList.remove('imgHover');
    nut.classList.remove('imgHover');
    monkey.classList.remove('imgHover');
}

//Updates the total amount of rounds and updates the HTML text
function updateCount(){
    count ++
    total.textContent = 'Total Rounds: ${count}';
}

