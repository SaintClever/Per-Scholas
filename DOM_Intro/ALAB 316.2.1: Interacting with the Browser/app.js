
// let question = prompt("What's your name: ");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let textarea = document.querySelector("textarea");
let button = document.querySelector("button");
let question = "javascript";


button.addEventListener("click", () => {
  console.log(textarea.value);
  textarea.value = '';
});

(() => {
  // if (textarea.value === "javascript") {
  //   player1.style.width = "1px";
  // } else {
  //   player2.style.width = "1px";
  // }
})();
