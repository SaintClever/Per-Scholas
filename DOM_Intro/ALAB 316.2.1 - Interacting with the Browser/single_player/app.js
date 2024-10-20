// let question = prompt("What's your name: ");
let player1 = document.querySelector("#player1");
let textarea = document.querySelector("textarea");
let button = document.querySelector("button");
let winner1 = document.querySelectorAll(".winner1");

// let randomLocation = Math.floor(Math.random() * player1.offsetWidth)
player1.style.animation = "animation 150s";


button.addEventListener("click", () => {
  console.log(textarea.value);

  if (textarea.value === "javascript") {
      
    // player1.style.width += `${window.innerWidth - player1.clientWidth}px`;
    // player1.style.setProperty("--start-width", player1.clientWidth);
    player1.style.setProperty("--end-width", `${100}%`);

    console.log(
      window.innerWidth,
      player1.clientWidth,
      getComputedStyle(player1).getPropertyValue("--start-width"),
      getComputedStyle(player1).getPropertyValue("--end-width")
    )
  } else {
    // player1.style.width -= `${player1.clientWidth}px`;
    // player1.style.setProperty("--start-width", player1.clientWidth);
    player1.style.setProperty("--end-width", `${0}%`);
  }

  textarea.value = '';
});