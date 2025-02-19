const choices = ["rock", "paper", "scissors"];

function getPCChoice() {
  return Math.floor(Math.random() * 3);
}

function play(userChoice) {
  const pcChoice = getPCChoice();
  userChoice = choices.indexOf(userChoice);
  let winner = "draw";

  if(userChoice === pcChoice) {}
  else
    winner = (userChoice === 0 && pcChoice === 2
      || userChoice === 2 && pcChoice === 1
      || userChoice === 1 && pcChoice === 0) ? "you" : "pc";

  document.getElementById("result").innerText = (message(choices[userChoice], choices[pcChoice], winner));
}

function message(userChoice, pcChoice, winner) {
  return "you: " + userChoice + ", pc: " + pcChoice + " -> " + winner;
}
