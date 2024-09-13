let humanScore = 0;
let PCScore =0;
let rounds = 0;

function PlayGame(){
    rounds++;
    if(rounds < 6){
    let humanChoice = (prompt("Chose between rock, paper, scisors!")).toLocaleLowerCase();

    
  
   
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scisors" ){

        let rdm =Math.random() * 100;
        let pcChoice;
        let choice =  rdm < 33.33?                 pcChoice = "rock":
                      rdm > 33.33 && rdm < 66.66 ? pcChoice = "paper" :
                                                   pcChoice = "scisors";

                    if(humanChoice === pcChoice){
                        alert(`Round: ${rounds} \n Tie, Human score: ${humanScore} PC score: ${PCScore}`);
                        

                    }else if(humanChoice === "rock" && pcChoice === "paper"){
                       
                        PCScore++;
                        alert(`Round: ${rounds} \n ${humanChoice} vs ${pcChoice} PC wins \n Human score: ${humanScore} PC score: ${PCScore}`);
                    }else if (humanChoice === "rock" && pcChoice === "scisors"){
                        
                        humanScore++;
                        alert(`Round: ${rounds} \n  ${humanChoice} vs ${pcChoice} Human wins \n Human score: ${humanScore} PC score: ${PCScore}`);
                    }else if ((humanChoice === "paper" && pcChoice === "scisors")){
                       
                        PCScore++;
                        alert(`Round: ${rounds} \n ${humanChoice} vs ${pcChoice} PC wins \n Human score: ${humanScore} PC score: ${PCScore}`);
                    }else if ((humanChoice === "paper" && pcChoice === "rock")){
                        
                        humanScore++;
                        alert(`Round: ${rounds} \n ${humanChoice} vs ${pcChoice} Human wins \n Human score: ${humanScore} PC score: ${PCScore}`);
                    }else if ((humanChoice === "scisors" && pcChoice === "rock")){
                        
                        PCScore++;
                        alert(`Round: ${rounds} \n ${humanChoice} vs ${pcChoice} PC wins \n Human score: ${humanScore} PC score: ${PCScore}`);
                    }else if ((humanChoice === "scisors" && pcChoice === "paper")){
                        
                        humanScore++;
                        alert(`Round: ${rounds} \n ${humanChoice} vs ${pcChoice} Human wins \n Human score: ${humanScore} PC score: ${PCScore}`);
                        
                    }
                    PlayGame();

    }else{
        alert("worng choice, F5");
        PlayGame();

    }

}else{
    alert("Game OVER");
    if(humanScore > PCScore){
        alert("Human wins");
    }else if(humanScore < PCScore){
        alert("PC wins");
    }
    alert("F5 to play again")
}

}


PlayGame();