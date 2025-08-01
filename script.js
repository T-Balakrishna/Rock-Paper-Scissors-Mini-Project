function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = userChoice;
  setTimeout(()=>{
    document.getElementById('user-choice').textContent = ""
    },1000)
  document.getElementById('computer-choice').textContent = computerChoice;
  setTimeout(()=>{
    document.getElementById('computer-choice').textContent = ""
    },1000)

  const result = getResult(userChoice, computerChoice);
  document.getElementById('outcome').textContent = 'Result: ' + result;
  setTimeout(()=>{
    document.getElementById('outcome').textContent = 'Result: '
    },1000)
  
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
