const elementArr = ['Rock','Paper','Scissors'];

function getComputerChoice(){

    //random the array to pick an element 
    const randomIndex = Math.floor(Math.random()* elementArr.length);
    console.log("Computer Selection: " + elementArr[randomIndex]);
    return elementArr[randomIndex];

}

//initiate variables to count points for both players
 let userPoint = 0, computerPoint = 0;

function playRound(playerSelection, computerSelection){

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


function pointChecking(){

    if(userPoint > computerPoint){
        return console.log("Congratulation, YOU WIN!");
    }else if(userPoint < computerPoint){
        return console.log("You lose :( ");
    }
    else return console.log("It's a draw");
}

function game(){
    //loops 5 times to play 5 rounds of games
    for (let i =0; i<5; i++){
    
        console.log("Round " + parseInt(i+1));

         //Make sure playerSelection parameter are case-insensitive
        let playerSelection = prompt("Rock Paper or Scissors : ").toLowerCase();

        console.log("Your Selection: " + playerSelection);

        //Make computerSelection to Lower Case too to make sure it matches with playerSelection format in the playRound Function
        const computerSelection = getComputerChoice().toLowerCase();

        playRound(playerSelection,computerSelection);  
    }


    console.log("RESULT: ");
    console.log("Your Point :" + userPoint);
    console.log("Computer Point :" +computerPoint);
    pointChecking();
}
game();






