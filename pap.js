let userScore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const scoreuser=document.querySelector("#user-score");
const scorecomp=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
    //rock,paper,scissors

};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw . play game";
    msg.style.backgroundColor="blue";
};

let showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        console.log("you win!");
        userScore++;
        scoreuser.innerText=userScore;
        console.log("user score is ",userScore);
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        console.log("you loss");
        compscore++;
        scorecomp.innerText=compscore;
        console.log("compscore si ",compscore);
        msg.innerText=`You loss ${compChoice} beat ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>
{
    console.log("user choice =",userChoice);
    //generate computer choice->modular
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);

    if(userChoice === compChoice)
    {
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissors,paper
           userWin = compChoice ==="paper"?false:true;
        } else if(userChoice==="paper")
        {
            //rock,scissors
            userWin=compChoice==="rock"?true:false;
        }else{
        userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});