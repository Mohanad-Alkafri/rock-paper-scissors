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
//store computer choice
let computer = getComputerChoice()

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
function playRound(humanChoice, computerChoice){
    //the logic for one round
    if((humanChoice == 'rock' && computerChoice == 'paper')||
        (humanChoice == 'paper' && computerChoice == 'scissors')||
        (humanChoice == 'scissors' && computerChoice == 'rock')){
            console.log('Computer wins, good luch next time!');
            //update the score
            return computerScore = computerScore+1
        }
        else if((humanChoice == 'rock' && computerChoice == 'scissors')||
        (humanChoice == 'paper' && computerChoice == 'rock')||
        (humanChoice == 'scissors' && computerChoice == 'paper')){
            console.log('Well done! You won!');
            return humanScore = humanScore + 1
        }
        else if(humanChoice == computerChoice){
            console.log('It is a tie! Focus.');
            return (humanScore, computerScore);
        }
};
//run the prompt to get the human input and excute the play round and set scores
getHumanChoice()
console.log(human)
console.log(computer)
playRound(human, computer)
console.log(`player score: ${humanScore}, computer score: ${computerScore}`)
