
// let question = prompt("What's your name: ");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let textarea = document.querySelector("textarea");
let button = document.querySelector("button");
let question = "javascript";


button.addEventListener("click", () => {
  console.log(textarea.value);

  if (textarea.value === "javascript") {
    alert("Correct");
    player1.style.width = `${player1.offsetWidth + 500}px`;
  } else {
    alert("Try again...");
    player2.style.width = `${player2.offsetWidth + 500}px`;
  }

  // if (player1.offsetWidth === 250)

  textarea.value = '';
});

(() => {
  // if (textarea.value === "javascript") {
  //   player1.style.width = "1px";
  // } else {
  //   player2.style.width = "1px";
  // }
})();
