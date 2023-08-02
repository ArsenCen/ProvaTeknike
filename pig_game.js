"use strict";
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let score0 = document.querySelector("#score--0");
let score1 = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");
const name1 = document.querySelector("#name--0");
const name2 = document.querySelector("#name--1");
const currentScore1 = document.querySelector("#current--0");
const currentScore2 = document.querySelector("#current--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//hapi i pare selektoje ate element qe do dhe me pas shtoji nje eventlistener
score0.textContent = 0;
score1.textContent = 0;
diceElement.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//hedhja e zarave
btnRoll.addEventListener("click", function () {
  // gjenerimi i zarit random // shfaqe zarin // nese zari eshte 1 ndrro lojtar
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   console.log(dice)
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  //1 add current score to active player

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner .name");
  } else {
    switchPlayer();
  }
  //2 kontrollo nese totali i pikeve eshte >=100
});
