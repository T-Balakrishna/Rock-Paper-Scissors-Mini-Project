function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = userChoice;
  document.getElementById('computer-choice').textContent = computerChoice;

  const result = getResult(userChoice, computerChoice);
  document.getElementById('outcome').textContent = 'Result: ' + result;
}

function getResult(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
} 
