let humanScore = 0;
let PCScore =0;
let scoreH = document.querySelector('.score-h');
let scoreC = document.querySelector('score-c');

let insideWindow = document.querySelector('.inside-game-window');

let newGameButton = document.querySelector('.new-game');
let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scisorsButton = document.querySelector('.scisors');

 


newGameButton.addEventListener("click", function(){
    newGameButton.setAttribute("style", "display:none");
    insideWindow.removeAttribute("id");
    insideWindow.classList.add("inside-game-window");


});

rockButton.addEventListener("click", PlayGame("rock"));
paperButton.addEventListener("click", PlayGame("paper"));
scisorsButton.addEventListener("click", PlayGame("scisors"));


function PlayGame(choice){
    
    if(!PCScore === 5 || !humanScore === 5){
    let humanChoice = choice; 

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scisors" ){

        let rdm =Math.random() * 100;
        let pcChoice;
        let choice =    rdm < 33.33?                    pcChoice = "rock":
                        rdm > 33.33 && rdm < 66.66 ?    pcChoice = "paper" :
                                                        pcChoice = "scisors";

                    if(humanChoice === pcChoice){
                    }else if(humanChoice === "rock" && pcChoice === "paper"){
                        PCScore++;
                    }else if (humanChoice === "rock" && pcChoice === "scisors"){
                        humanScore++;
                    }else if ((humanChoice === "paper" && pcChoice === "scisors")){
                        PCScore++;
                    }else if ((humanChoice === "paper" && pcChoice === "rock")){
                        humanScore++;
                    }else if ((humanChoice === "scisors" && pcChoice === "rock")){
                        PCScore++;
                    }else if ((humanChoice === "scisors" && pcChoice === "paper")){
                        humanScore++;
                    }
        }
        
    scoreH.textContent = humanScore;
    scoreC.textContent = PCScore;
    }

}

