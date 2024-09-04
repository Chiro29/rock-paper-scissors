function getComputerChoice() {
  const computerSelection = ['rock', 'paper', 'scissors'];
  return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

function getHumanChoice() {
  let humanSelection;
  const choices = ['rock', 'paper', 'scissors'];

  do {
    humanSelection = prompt('Choose between rock, paper and scissors');
    humanSelection = humanSelection.toLowerCase();
  }
  while (!choices.includes(humanSelection)); //checks whether the user's choice is present in the array of valid choices
  
  return humanSelection;
}

function playRound(humanChoice, computerChoice) {
  let hc = humanChoice;
  let cc = computerChoice;

  if((hc === 'rock' && cc === 'scissors') || (hc === 'paper' && cc === 'rock') || (hc === 'scissors' && cc === 'paper')) {
    humanScore++;
    return 'you win, ' + hc + ' beats ' + cc;
  }
  else if(hc === cc) {
    draw++;
    return 'Draw';
  }
  else {
    computerScore++;
    return 'you lose, ' + cc + ' beats ' + hc;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  draw = 0;

  for(let i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let roundResult = playRound(humanSelection, computerSelection);
    console.log('Round ' + i + ': ' + roundResult);
  }
  if(humanScore > computerScore) {
    return 'You Won!\nComputer score: ' + computerScore + ' | Your score: ' + humanScore + ' | Draws: ' + draw;
  }
  else if(humanScore < computerScore) {
    return 'You Lost!\nComputer score: ' + computerScore + ' | Your score: ' + humanScore + ' | Draws: ' + draw;
  }
  else {
    return 'It\'s a tie!\nComputer score: ' + computerScore +' | Your score: ' + humanScore + ' | Draws: ' + draw;
  }
}

console.log(playGame());




