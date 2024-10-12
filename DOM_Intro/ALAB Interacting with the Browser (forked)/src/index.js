// Create your game here!
const questions = [
  { "What is Tishana's favorite Poke'Mon?": "Jigglypuff" },
  { "What is Minara's nick name?": "Mr. ES6 - 2015" },
  { "Where is Coach MidKnight located?": "Florida" },
  { "Who created JavaScript?": "Brendan Eich" },
];

let score = 0;

let randomIndex = Math.floor(Math.random() * questions.length);
let randomQuestion = questions[randomIndex];
let question = Object.keys(randomQuestion).toString();
let answer = Object.values(randomQuestion).toString();

let app = document.querySelector("#app");
let div3 = document.querySelectorAll("div")[3];

let code = document.createElement("code");
code.classList.add("code");
code.innerHTML = `Score: ${score}`;

// Create table
let table = document.createElement("table");
table.innerHTML = `
<br>
<tr>
    <td id="question" style="border: 1px solid gray; border-radius: 5px;">
        ${question}
    </td>
</tr>
<tr>
    <td style="padding: 0px; border: none;">
    <textarea 
    style="padding: 0px;
    width: 100%;
    border: 1px solid gray;
    border-radius: 5px;
    resize: none;" 
    name="answer"
    rows="10"></textarea>
    </td>
</tr>`;

let button = document.createElement("button");
button.innerText = "Submit";

// Append children
div3.appendChild(code);
div3.appendChild(table);
div3.appendChild(button);

// Add event listener
let textarea = document.querySelectorAll("textarea");
let tableQuestion = document.querySelector("#question");

button.addEventListener("click", () => {
  let userInput = textarea[0];

  if (userInput.value.toLowerCase() === answer.toLowerCase()) {
    score += 1;
    code.innerHTML = `Score: ${score}`;
  } else {
    alert("Try again...");
    score -= 1;
    code.innerHTML = `Score: ${score}`;
    if (score < 0) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
  }

  // Sloppy WET... 🤢🤮 yuck! 🫠
  userInput.value = "";
  randomIndex = Math.floor(Math.random() * questions.length);
  randomQuestion = questions[randomIndex];
  question = Object.keys(randomQuestion).toString();
  answer = Object.values(randomQuestion).toString();
  tableQuestion.innerText = question;
});
