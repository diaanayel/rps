/*
I know polluting env with global vars is forbidden, may god forgive me :(
TODO
refactor!.. this is also forbidden :(
*/

const userFigure = document.querySelector("#user-figure");
const pcFigure   = document.querySelector("#pc-figure");

const userChoiceImg  = document.querySelector("#user-choice-img");
const pcChoiceImg    = document.querySelector("#pc-choice-img");
const userScoreLabel = document.querySelector("#user-score");
const pcScoreLabel   = document.querySelector("#pc-score");
const winnerLabel    = document.querySelector("#winner");

const choices = {
  rock: { value: 0, name: "rock", img: "/src/assets/svgs/rock.svg" },
  paper: { value: 1, name: "paper", img: "/src/assets/svgs/paper.svg" },
  scissors: { value: 2, name: "scissors", img: "/src/assets/svgs/scissors.svg" },
  fresh: { value: 3, name: "fresh", img: "/src/assets/svgs/qmark.svg" }
};

const user = { name: "You", score: 0, latestChoice: null };
const pc = { name: "Computer", score: 0, latestChoice: null };

let hasGameEnded = false;
let gameWinner = null;

document.querySelector("#new-game").addEventListener("click", () => {
  user.latestChoice = choices.fresh;
  pc.latestChoice   = choices.fresh;
  user.score = 0;
  pc.score   = 0;
  winnerLabel.innerText = "";
  gameWinner = null;
  hasGameEnded = false;

  updateUI();
});

document.querySelector(".choices").addEventListener("click", (e) => {
  if(hasGameEnded) return;

  pc.latestChoice   = Object.values(choices)[getPCChoiceIdx()];
  user.latestChoice = choices[e.target.alt];
  if(user.latestChoice === null) return;

  let roundWinner = null;

  if(!(isDraw())) {
    roundWinner = getRoundWinner();
    roundWinner.score++;
  }

  updateUI(roundWinner);

  if(isGameOver()) {
    gameWinner = getGameWinner();
    displayGamewinner();
    hasGameEnded = true;
  }
});

function isGameOver() {
  return (user.score === 5 || pc.score === 5) ? true : false;
}

function getGameWinner() {
  return (user.score === 5) ? user : pc;
}

function getRoundWinner() {
  return isUserWinner(user.latestChoice.value, pc.latestChoice.value) ? user : pc;
}

function isDraw() {
  return (user.latestChoice.value === pc.latestChoice.value)
}

function isUserWinner(userChoiceValue, pcChoiceValue) {
  const ROCK_VS_SCISSORS  = userChoiceValue === 0 && pcChoiceValue === 2;
  const SCISSORS_VS_PAPER = userChoiceValue === 2 && pcChoiceValue === 1;
  const PAPER_VS_ROCK     = userChoiceValue === 1 && pcChoiceValue === 0;

  return ROCK_VS_SCISSORS || SCISSORS_VS_PAPER || PAPER_VS_ROCK;
}

function getPCChoiceIdx() { return Math.floor(Math.random() * 3); }

function displayGamewinner() {
  winnerLabel.innerText = gameWinner.name + " won";
}

function updateUI(winner) {
  userChoiceImg.src = user.latestChoice.img;
  pcChoiceImg.src   = pc.latestChoice.img;

  userScoreLabel.innerText = user.score;
  pcScoreLabel.innerText = pc.score;

  if (winner === user) {
    userFigure.classList.add("winner");
    pcFigure.classList.add("loser");
    userFigure.classList.remove("loser");
    pcFigure.classList.remove("winner");
  } else if (winner === pc) {
    userFigure.classList.add("loser");
    pcFigure.classList.add("winner");
    userFigure.classList.remove("winner");
    pcFigure.classList.remove("loser");
  } else {
    userFigure.classList.remove("winner", "loser");
    pcFigure.classList.remove("winner", "loser");
  }
}
