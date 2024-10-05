let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{    
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw! play again";
    msg.style.backgroundcolor = "#081b31";
};
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundcolor = "yellow";
    } else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you losT! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundcolor = "red"; 
    }
};
const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    // Generate computer choice;  modular way of programming called modualar function
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
  if(userChoice === compChoice){
  drawGame();
    }else{
        let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    }else {
        (userChoice === "scissors")
       userWin = compChoice === "rock" ? false : true;
        }
  showWinner(userWin,userChoice,compChoice);
    } 
};
choices.forEach((choice) => {  
    choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
          playGame(userChoice);
    });
});