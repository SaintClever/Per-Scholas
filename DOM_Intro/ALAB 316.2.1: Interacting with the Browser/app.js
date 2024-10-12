// let question = prompt("What's your name: ");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let players = [player1, player2];

let textarea = document.querySelector("textarea");
let button = document.querySelector("button");

let winner1 = document.querySelectorAll(".winner1");
let winner2 = document.querySelectorAll(".winner2");

// let randomPick = Math.floor(Math.random() * players.length)
// players[randomPick].style.animation = "div-width 150s";


button.addEventListener("click", () => {
  console.log(textarea.value);

  if (textarea.value === "javascript") {
    console.log("Correct");
    player1.style.width = `${player1.offsetWidth + 150}px`;
    player2.style.width = `${player2.offsetWidth - 150}px`;
  } else {
    console.log("Try again...");
    player2.style.width = `${player2.offsetWidth + 150}px`;
    player1.style.width = `${player1.offsetWidth - 150}px`;
  }

  if (player1.offsetWidth <= 250) {
    winner2[0].style.display = "block";
    winner2[1].style.display = "block";

    winner1[0].style.display = "none";
    winner1[1].style.display = "none";
  } else if (player2.offsetWidth <= 250) {
    winner1[0].style.display = "block";
    winner1[1].style.display = "block";

    winner2[0].style.display = "none";
    winner2[1].style.display = "none";
  }

  textarea.value = '';
});

(() => {
  // if (textarea.value === "javascript") {
  //   player1.style.width = "1px";
  // } else {
  //   player2.style.width = "1px";
  // }
})();
