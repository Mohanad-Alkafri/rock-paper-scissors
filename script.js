//create containers for score
let humanScore = 0
let computerScore = 0
// create a function to get computer choice
function getComputerChoice(){
    //get a random number between 1 and 3
    let number = Math.floor(Math.random()*3)+1;
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
    //create a container for human choice
let human
let humanChoice
let computer
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
        //create container for computer choice
    
    const ftss = document.querySelector('div')
    ftss.style.color = 'blue'
    const rock = document.querySelector('.rock')
    const paper = document.querySelector('.paper')
    const scissors = document.querySelector('.scissors')
    const scoreBoard = document.createElement('div')
    scoreBoard.style.border = '20px solid red'
    scoreBoard.style.backgroundColor = 'yellow'
    ftss.appendChild(scoreBoard)
  
    rock.addEventListener('click', ()=>{human = 'rock' 
        computer = getComputerChoice()
        playRound(human, computer)
         //show user's choice
if (humanScore>=5 || computerScore>=5){
    if(humanScore>computerScore){
        scoreBoard.textContent ='congrats bitch'
    }
    else if(humanScore<computerScore){
        scoreBoard.textContent = 'computer won sucker'
    }
}
else{scoreBoard.textContent = (`player: ${human}\t 
    computer: ${computer}\n
    player score: ${humanScore}, computer score: ${computerScore}`)
}})
    
    paper.addEventListener('click', ()=>{human = 'paper' 
         computer = getComputerChoice()
         playRound(human, computer)
if (humanScore>=5 || computerScore>=5){
    if(humanScore>computerScore){
        scoreBoard.textContent ='congrats bitch'
    }
    else if(humanScore<computerScore){
        scoreBoard.textContent = 'computer won sucker'
    }}
else{
    scoreBoard.textContent = (`player: ${human}\t 
    computer: ${computer}\n
    player score: ${humanScore}, computer score: ${computerScore}`)
}})

    scissors.addEventListener('click', ()=>{human = 'scissors' 
         computer = getComputerChoice()
         playRound(human, computer)
if (humanScore>=5 || computerScore>=5){
    if(humanScore>computerScore){
        scoreBoard.textContent ='congrats bitch'
    }
    else if(humanScore<computerScore){
        scoreBoard.textContent = 'computer won sucker'
    }
    }
else{
    scoreBoard.textContent = (`player: ${human}\t 
    computer: ${computer}\n
    player score: ${humanScore}, computer score: ${computerScore}`)
}})
