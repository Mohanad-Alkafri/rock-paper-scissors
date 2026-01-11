//create containers for score
let humanScore = 0
let computerScore = 0
//create a for loop best of 3
for(let i=0; i<=2; ++i){
    //get a random number between 1 and 3
let number = Math.floor(Math.random()*3)+1;
// create a function to get computer choice
function getComputerChoice(randomNumber){
    //link the options you want to the random numbers
    if (number==1){
        return 'rock';
    }
    else if(number==2){
        return 'paper';
    }
    else if(number==3){
        return 'scissors';
    }
};

//create a function for human choice
    //create a container for human choice
let human
function getHumanChoice(){
    //prompt the input form the user
    human = prompt('choose between rock, paper or scissors and try to beat the computer', '');
    //return the input
    return human;
};

//create a function play round
function playRound(humanChoice, computerChoice){
    //the logic for one round
    if((humanChoice == 'rock' && computerChoice == 'paper')||
        (humanChoice == 'paper' && computerChoice == 'scissors')||
        (humanChoice == 'scissors' && computerChoice == 'rock')){
            console.log('Computer wins, good luch next time!');
            alert(('Computer wins, good luch next time!'))
            //update the score
            return computerScore = computerScore+1
        }
        else if((humanChoice == 'rock' && computerChoice == 'scissors')||
        (humanChoice == 'paper' && computerChoice == 'rock')||
        (humanChoice == 'scissors' && computerChoice == 'paper')){
            console.log('Well done! You won!');
            alert('Well done! You won!')
            return humanScore = humanScore + 1
        }
        else if(humanChoice == computerChoice){
            console.log('It is a tie! Focus.');
            alert('It is a tie! Focus.')
            return (humanScore, computerScore);
        }
};
        //create container for computer choice
    let computer = getComputerChoice(number)
    //get the computer choice
    getComputerChoice(number)
    //get the input from the user
    getHumanChoice()
    //play the round
    playRound(human, computer)
    //round counter
    console.log(`round ${i+1}`)
    //show user's choice
    console.log(`player: ${human}`)
    //show computer's choice
    console.log(`computer: ${computer}`)
    //show the scoreboard
    console.log(`player score: ${humanScore}, computer score: ${computerScore}`)
};