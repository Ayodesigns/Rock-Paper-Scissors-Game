// Solved and Tested Version
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  return (random === 0) ? 'Rock' : (random === 1) ? 'Paper' : 'Scissors';
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'Rock' && computerSelection == 'Paper') {
    return 'You Lose! Paper beats Rock';
  } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    return 'You win! Rock beats Scissors';
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    return 'You win! Paper beats Rock';
  } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
    return 'You lose! Scissors beats Paper';
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    return 'You win! Scissors beats Paper';
  } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
    return 'You lose! Rock beats Scissors';
  } else if (playerSelection === computerSelection) {
    return 'Draw';
  } else {
    return 'Invalid input';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
    const finalSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    const computerSelection = getComputerChoice();
    const result = playRound(finalSelection, computerSelection);

    console.log(result);

    if (result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    return 'You win the game!';
  } else if (playerScore < computerScore) {
    return 'You lose the game!';
  } else {
    return 'It\'s a tie!';
  }
}

console.log(game());
