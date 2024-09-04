humanScore = 0;
computerScore = 0;

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
    return 'you win ' + hc + ' beats ' + cc;
  }
  else if(hc === cc) {
    return 'draw';
  }
  else {
    computerScore++;
    return 'you lose ' + cc + ' beats ' + hc;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const roundResult = playRound(humanSelection, computerSelection);
console.log(roundResult);




