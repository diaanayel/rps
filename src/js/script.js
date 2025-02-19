const choices = ["rock", "paper", "scissors"];

function getPCChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function play(userChoice) {
  const pcChoice = getPCChoice();
  let winner = "draw";

  if(userChoice === pcChoice) {}
  else
    winner = (userChoice === "rock" && pcChoice === "scissors"
      || userChoice === "scissors" && pcChoice === "paper"
      || userChoice === "paper" && pcChoice === "rock")
      ? "you" : "pc";

  document.getElementById("result").innerText = (message(userChoice, pcChoice, winner));
}

function message(userChoice, pcChoice, winner) {
  return "you: " + userChoice + ", pc: " + pcChoice + " -> " + winner;
}
