//play against computer

//user left 
// rock scissors => user win
// rock paper => user lose
// rock rock => draw
// scissors paper => user win
// scissors rock => user lose
// scissors scissors => draw
// paper rock => user win
// paper scissors => user lose
// paper paper => draw


//create an array to store the elements
const elementArr = ['Rock','Paper','Scissors'];

//begin with a function getComputerChoice that randomly pick Rock Paper or Scissors
function getComputerChoice(){
    //random the array
    const randomIndex = Math.floor(Math.random()* elementArr.length);
    //use console to make sure it works
    console.log("Computer Selection: " + elementArr[randomIndex]);
    //initiate a variable to store the randomly picked element from the array
    return elementArr[randomIndex];
}

// //give value 
// //Make sure playerSelection parameter are case-insensitive
// let playerSelection = prompt("Rock Paper or Scissors : ").toLowerCase();
// console.log("Your Selection: " + playerSelection);
// const computerSelection = getComputerChoice().toLowerCase();
 let userPoint = 0, computerPoint = 0;

//write a function that play a single round of Rock Paper Scissors, taking two parameters, the playerSelection and computerSelection
function playRound(playerSelection, computerSelection){
    //count score variable
   
    //make comparison
    //return a string that declares the winner like "You lose! Paper beats Rock"
    if(playerSelection === "rock" && computerSelection === "scissors"){ 
        userPoint++;
        return console.log("You Win!, Rock beats Scissors");
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        computerPoint++;
        return console.log("You lose, Paper beats Rock");
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerPoint++;
        return console.log("You Lose!, Rock beats Scissors");
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        userPoint++;
        return console.log("You Win!, Scissors beats Rock");
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerPoint++;
        return console.log("You Lose!, Scissors beats Paper");
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        userPoint++;
        return console.log("You Win!, Paper beats Rock");
    }
    else{ 
        return console.log("It's a draw");
    }
   
}
//playRound(playerSelection,computerSelection);
function pointChecker(){
    if(userPoint > computerPoint){
        return console.log("Congratulation, YOU WIN!");
    }else if(userPoint < computerPoint){
        return console.log("You lose :( ");
    }
    else return console.log("It's a draw");
}


//function game()
function game(){
    //loop 5 times
    for (let i =0; i<5; i++){
        //give value 
        //Make sure playerSelection parameter are case-insensitive
        console.log("Round " + parseInt(i+1));
        let playerSelection = prompt("Rock Paper or Scissors : ").toLowerCase();
        console.log("Your Selection: " + playerSelection);
        const computerSelection = getComputerChoice().toLowerCase();
        playRound(playerSelection,computerSelection);  
    }
    console.log("RESULT: ");
    console.log("Your Point :" + userPoint);
    console.log("Computer Point :" +computerPoint);
    pointChecker();
}
game();
//count point
//use previous function instide game() to play 5 round game that keeps score
//reports a winner or loser at the end.






