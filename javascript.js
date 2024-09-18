let humanScore = 0;
let PCScore = 0;
let scoreH = document.querySelector('.score-h');
let scoreC = document.querySelector('.score-c');

let insideWindow = document.querySelector('.inside-game-window');

let newGame = document.createElement('button');
newGame.classList.add('new-game');
newGame.textContent = ('NEW GAME');

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scisorsButton = document.querySelector('.scisors');

let scorePannel = document.querySelector('.score-pannel');
let scoreCard = document.querySelectorAll('.score-card');

let winner = document.createElement('div');
winner.classList.add("winner");

newGame.addEventListener("click", function(){
    window.location.reload();
});
rockButton.addEventListener("click", function(){
    PlayGame('rock');
});
paperButton.addEventListener("click", function(){
    PlayGame('paper');
});
scisorsButton.addEventListener("click", function(){
    PlayGame('scisors');
});


function PlayGame(choiceRPC){
    
    if(PCScore < 5 && humanScore < 5){

    let humanChoice = choiceRPC; 

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
    
                    if (humanScore === 5){
                        setTimeout(() => {
                            winner.textContent = "HUMAN WINS !!!"
                        scoreCard.forEach(card=>card.setAttribute("style", "display : none"));
                        scorePannel.appendChild(winner);
                        scorePannel.appendChild(newGame);
                        scorePannel.style.flexDirection = 'column';
                        scorePannel.style.gap = '10px';
                        scorePannel.classList.add('fade-in-anim');
                            
                        }, 500);
                        }
        
                        if(PCScore === 5){
                            setTimeout(() => {
                                winner.textContent = "COMPUTER WINS !!!"
                            scoreCard.forEach(card=>card.setAttribute("style", "display : none"));
                            scorePannel.appendChild(winner);
                            scorePannel.appendChild(newGame);
                            scorePannel.style.flexDirection = 'column';
                            scorePannel.style.gap = '10px';
                            scorePannel.classList.add('fade-in-anim');
                            }, 500);
                            }
        

   



    }

    scoreC.textContent = `${PCScore}`;
    scoreH.textContent = `${humanScore}`;

    


}

