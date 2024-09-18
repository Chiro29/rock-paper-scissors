let computerScore = 0;
let humanScore = 0;
let draw = 0;

const scores = document.querySelectorAll("div.container-score h2")
const buttons = document.querySelectorAll(".choice-btn");

const container = document.querySelector(".container");

const boxResult = document.createElement("div");
const textResult = document.createElement("p");
const finalResult = document.createElement("h2");
const playAgain = document.createElement("button");

playAgain.classList.add("btn-reset");

function getComputerChoice() {
  const computerSelection = ['rock', 'paper', 'scissors'];
  return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

function playRound(humanChoice, computerChoice) {
  let hc = humanChoice;
  let cc = computerChoice;

  if((hc === 'rock' && cc === 'scissors') || (hc === 'paper' && cc === 'rock') || (hc === 'scissors' && cc === 'paper')) {
    humanScore++;
    scores[0].textContent = `${"You"}: ${humanScore}`;
    if(humanScore > 4){
      finalResult.textContent = "You won the game!";
      playAgain.textContent = "Play again";

      boxResult.appendChild(finalResult);
      boxResult.appendChild(playAgain);
    }
    return 'You win, ' + hc + ' beats ' + cc;
  }
  else if(hc === cc) {
    draw++;
    scores[2].textContent = `${"Draws"}: ${draw}`;
    return 'Draw';
  }
  else {
    computerScore++;
    scores[1].textContent = `${"Computer"}: ${computerScore}`;
    if(computerScore > 4){
      finalResult.textContent = "You lost the game! Try again";
      playAgain.textContent = "Play again";
  
      boxResult.appendChild(finalResult);
      boxResult.appendChild(playAgain); 
    }
    return 'You lose, ' + cc + ' beats ' + hc;
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.id;
    computerChoice = getComputerChoice();
    textResult.textContent = playRound(playerChoice, computerChoice);

    container.appendChild(boxResult);
    boxResult.appendChild(textResult);
  });
});

playAgain.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  draw = 0; 
  scores[0].textContent = `${"You"}: ${humanScore}`;
  scores[1].textContent = `${"Computer"}: ${computerScore}`;
  scores[2].textContent = `${"Draw"}: ${draw}`;

  boxResult.removeChild(finalResult);
  boxResult.removeChild(playAgain);
  container.removeChild(boxResult);
});