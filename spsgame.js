let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const  compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
     //ROCK , PAPER ,SCISSORS...
    const option = ["rock" , "paper" , "scissors"]
   const randIdx = Math.floor(Math.random()*3);
   return option[randIdx];
}


const drawGame = () =>{
    console.log("game was draw.")
    
    msg.style.backgroundColor = "gray";


}

const showWinner = (userWin , userChoice , compChoice) => {
    
    
    if(userWin){
      
        userScore++;
        userScorePara.innerText = userScore;

        console.log("You Win")
        msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }else{

        compScore++;
        compScorePara.innerText = compScore;

        
        msg.innerText = `You Lose! ${compChoice} beat Your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}



const palyGame =  (userChoice) => {

console.log("user Choice = " , userChoice);
//GENERATE COMPUTER CHOICE -> MODULAR...
const compChoice = genCompChoice();
console.log("comp Choice = " , compChoice);


  if(userChoice === compChoice){
    // RACK = PAPER = SCISSORS..MATCH WAS DRAW...
    drawGame();
}
else{

    let userWin = true;
    if(userChoice === "rock"){
        //PAPER ,SCISSORS.
       userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        //ROCK , SCISSORS.
       userWin =  compChoice ==="scissors" ? false : true;
}
else{
  //PAPER , ROCK
   userWin = compChoice === "rock" ? false : true;
}

showWinner(userWin , userChoice ,compChoice);

};
     
}

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id")
    
    palyGame(userChoice);
    });
});