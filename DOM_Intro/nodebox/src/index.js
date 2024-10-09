import "./styles.css";

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";
document.body.appendChild(mainEl);

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

for (let i in menuLinks) {
  let anchor = topMenuEl.appendChild(document.createElement("a"));
  anchor.setAttribute("href", menuLinks[i].href);
  anchor.innerText = menuLinks[i].text;

  // OR
  // topMenuEl.innerHTML += `<a href="${menuLinks[i].href}">${menuLinks[i].text}</a>`;
}
