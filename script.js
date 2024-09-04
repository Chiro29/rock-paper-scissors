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
}




