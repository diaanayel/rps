const choices = ["rock", "paper", "scissors"];

document.querySelector(".controls").addEventListener("click", (e) => {
  const pcChoiceIdx   = getPCChoice();
  const userChoiceIdx = choices.indexOf(e.target.value);
  if(userChoiceIdx === -1) return;

  display(choices[userChoiceIdx], choices[pcChoiceIdx],
    winnerOrDraw(userChoiceIdx, pcChoiceIdx));
});

function winnerOrDraw(userChoice, pcChoice) {
  return (userChoice === pcChoice) ? "draw" : getWinner(userChoice, pcChoice);
}

function getWinner(userChoice, pcChoice) {
  return (isUserWinner(userChoice, pcChoice)) ? "you" : "pc";
}

function isUserWinner(userChoice, pcChoice) {
  const ROCK_VS_SCISSORS  = userChoice === 0 && pcChoice === 2;
  const SCISSORS_VS_PAPER = userChoice === 2 && pcChoice === 1;
  const PAPER_VS_ROCK     = userChoice === 1 && pcChoice === 0;

  return ROCK_VS_SCISSORS || SCISSORS_VS_PAPER || PAPER_VS_ROCK;
}

function getPCChoice() { return Math.floor(Math.random() * 3); }

function display(userChoice, pcChoice, winner) {
  document.getElementById("result").innerText = ("you: " + userChoice + ", pc: " + pcChoice + " -> " + winner);
}
