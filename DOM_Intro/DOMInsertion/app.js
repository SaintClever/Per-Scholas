let div = document.createElement("div");
let ol = document.createElement("ol");

let mySites = [
  "http://linkedin.com/in/parchment",
  "http://github.com/SaintClever",
];


for (let i = 0; i < mySites.length; i++) {
  // ol.appendChild(document.createElement("li")).innerHTML = `<a href="${mySites[i]}" target="_blank">${mySites[i]}</a>`;

  let myList = ol.appendChild(document.createElement("li"))
  
  // Literal representation of Text ONLY
  // myList.innerText = `<a href="${mySites[i]}" target="_blank">${mySites[i]}</a>`;

  // Literal representation of Text with hidden spaces, line breaks
  // myList.innerContent = `<a href="${mySites[i]}" target="_blank">${mySites[i]}</a>`;

  // Literal representation of HTML
  myList.innerHTML = `<a href="${mySites[i]}" target="_blank">${mySites[i]}</a>`;
}

document.body.appendChild(div).append(ol);