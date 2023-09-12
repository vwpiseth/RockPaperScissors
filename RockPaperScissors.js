
document.addEventListener('DOMContentLoaded', function() {
    const elementArr = ['Rock','Paper','Scissors'];
    const para = document.querySelector('.roundResult');
    const computerChoice  = document.querySelector('.computerChoice');
    const userChoice = document.querySelector('.userChoice');


    function getComputerChoice(){

        //random the array to pick an element 
        const randomIndex = Math.floor(Math.random()* elementArr.length);
        // console.log("Computer Selection: " + elementArr[randomIndex]);
        computerChoice.textContent = `The Computer Pick : ${elementArr[randomIndex].toUpperCase()}`;
        return elementArr[randomIndex];
    
    }
    

//initiate variables to count points for both players
   let userPoint = 0, computerPoint = 0;

    function playRound(playerSelection, computerSelection){

        if(playerSelection === "rock" && computerSelection === "scissors"){ 
            userPoint++;
             para.textContent = "You Win!, ROCK beats SCISSORS";
        }
        else if(playerSelection === "rock" && computerSelection === "paper"){
            computerPoint++;
             para.textContent = "You Lose!, PAPER beats ROCK" ;
        }
        else if(playerSelection === "scissors" && computerSelection === "rock"){
            computerPoint++;
             para.textContent = "You Lose!, ROCK beats SCISSORS";
        }
        else if(playerSelection === "scissors" && computerSelection === "paper"){
            userPoint++;
             para.textContent = "You Win!, SCISSORS beats PAPER";
        }
        else if(playerSelection === "paper" && computerSelection === "scissors"){
            computerPoint++;
             para.textContent = "You Lose!, SCISSORS beats PAPER" ;
        }
        else if(playerSelection === "paper" && computerSelection === "rock"){
            userPoint++;
             para.textContent = "You Win!, PAPER beats ROCK" ;
        }
        else{ 
             para.textContent = "It's a draw" ;
        }
    
    }

    const rockBtn = document.querySelector('.btnRock');
    const paperBtn = document.querySelector('.btnPaper');
    const scissorsBtn = document.querySelector('.btnScissors');
    const userScore = document.querySelector('.userPoint');
    const computerScore = document.querySelector('.computerPoint');
    const result = document.querySelector('.result');
    const roundNumber = document.querySelector('.roundNumber');
    const startMessage = document.querySelector('h2');
    const restartBtn = document.querySelector('.restartButton');
    let round =0;
    
    function pointChecking(){
        if(round===5){
            if(userPoint > computerPoint){
            result.textContent = "Congratulation, YOU WIN!";
        }else if(userPoint < computerPoint){
            result.textContent = "Sorry, You Lose :( ";
        }
        else result.textContent = "It's a Draw !";
         while (restartBtn.firstChild) {
            restartBtn.removeChild(restartBtn.firstChild);
        }
        const button = document.createElement("button");
        button.textContent = textContent = "Play Again";
        button.style.cssText = "background-color:turquoise; color: white; width:300px; height: 50px; font-size: 20px; boarder-radius: 10px; margin-top : 10px;" 
        button.onclick = function(){
            location.reload();
        }
        restartBtn.appendChild(button);
        }
       
    }

    rockBtn.addEventListener('click', function () {
        if(round<5){
            startMessage.textContent = "";
            roundNumber.textContent = `Round ${parseInt(round+1)}`;
            const playerSelection = "rock";
            const computerSelection = getComputerChoice().toLowerCase();
            userChoice.textContent = `Your Pick : ${playerSelection.toUpperCase()}`;
            playRound(playerSelection,computerSelection);
            userScore.textContent = `Your current point : ${userPoint}`;
            computerScore.textContent = `Computer current point ${computerPoint}`;
            round++ ;
           pointChecking();
        
        } 
        
    });

    paperBtn.addEventListener('click', function (){
        if(round<5){
            startMessage.textContent = "";
            roundNumber.textContent = `Round ${parseInt(round+1)}`;
            const playerSelection = "paper";
            const computerSelection = getComputerChoice().toLowerCase();
            userChoice.textContent = `Your Pick : ${playerSelection.toUpperCase()}`;
            playRound(playerSelection,computerSelection); 
            userScore.textContent = `Your current point : ${userPoint}`;
            computerScore.textContent = `Computer current point ${computerPoint}`;
            round++;
           pointChecking(); 
        }
    });

    scissorsBtn.addEventListener('click', function (){
        if(round<5){
            startMessage.textContent = "";
            roundNumber.textContent = `Round ${parseInt(round+1)}`;
            const playerSelection = "scissors";
            const computerSelection = getComputerChoice().toLowerCase();
            userChoice.textContent = `Your Pick : ${playerSelection.toUpperCase()}`;
            playRound(playerSelection,computerSelection);  
            userScore.textContent = `Your current point : ${userPoint}`;
            computerScore.textContent = `Computer current point ${computerPoint}`;
            round++;
           pointChecking(); 
        }
    });
});








