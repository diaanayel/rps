const choices = ["rock", "paper", "scissors"];

function getPCChoice() { return Math.floor(Math.random() * 3); }

function play(userChoice) {
  const pcChoice = getPCChoice();
  userChoice = choices.indexOf(userChoice);
  display(choices[userChoice], choices[pcChoice], winnerOrDraw(userChoice, pcChoice));
}

function winnerOrDraw(userChoice, pcChoice) {
  return (userChoice === pcChoice) ? "draw" : getWinner(userChoice, pcChoice);
}

function getWinner(userChoice, pcChoice) {
  return (userChoice === 0 && pcChoice === 2
    || userChoice === 2 && pcChoice === 1
    || userChoice === 1 && pcChoice === 0) ? "you" : "pc";
}

function display(userChoice, pcChoice, winner) {
  document.getElementById("result").innerText = ("you: " + userChoice + ", pc: " + pcChoice + " -> " + winner);
}
