//create a function for computer choice
    //make that function pick a random number between 1 to 3
let number = Math.floor(Math.random()*3)+1;
function getComputerChoice(){
    //link the options you want to the random numbers
    if (number===1){
        return 'rock';
    }
    else if(number===2){
        return 'paper';
    }
    else if(number===3){
        return 'scissors';
    }
};

//create a function for human choice
let human
function getHumanChoice(){
    //prompt the input form the user
    human = prompt('choose between rock, paper or scissors and try to beat the computer', '');
    //return the input
    return human;
};

//create a scoreboard 
//create variables to store the scores
let humanScore = 0
let computerScore = 0

//logic for a single round of the game
//create a function play round
