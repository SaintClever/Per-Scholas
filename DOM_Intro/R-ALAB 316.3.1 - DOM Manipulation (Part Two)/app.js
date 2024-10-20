//////////////// ELEMENTS SELECTION
const mainEl = document.querySelector("main");
const topMenuEl = document.querySelector("#top-menu");
const subMenuEl = document.querySelector("#sub-menu");
let subMenuLinks;
// const menuLinks = [
//   { text: 'about', href: '/about' },
//   { text: 'catalog', href: '/catalog' },
//   { text: 'orders', href: '/orders' },
//   { text: 'account', href: '/account' },
// ];

const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

////////////// FUNCTIONS
const appendElements = (arr) => {
  arr.forEach((element) => {
    const aTagEl = document.createElement("a");
    aTagEl.href = element.href;
    aTagEl.textContent = element.text;

    topMenuEl.append(aTagEl);
  });
};

// PART 5
const buildSubMenu = (subLinks, subMenuElement) => {
  // 1. Clear the current content of subMenu element
  Array.from(subMenuElement.children).forEach((element) => {
    element.remove();
  });

  // 2. Iterate over the subLink array
  subLinks.forEach((element) => {
    // a. Create a element
    const aTagEl = document.createElement("a");

    // b. Add href
    aTagEl.href = element.href;

    // c. Set element content
    aTagEl.text = element.text;

    // d. Append
    subMenuEl.append(aTagEl);
  });
};

///////////// ACTIONS
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.insertAdjacentHTML("afterbegin", `<h1>DOM Manipulation</h1>`);
mainEl.classList.add("flex-ctr");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

appendElements(menuLinks);

// PART 3
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.setAttribute("class", "flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;

// PART 4: ADDING MENU INTERACTION
const topMenuLinks = Array.from(document.querySelectorAll("a"));

topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (!topMenuLinks.includes(e.target)) return;

  // Loop through the list of links and figure out which element had the active class
  const previousSelection = topMenuLinks.find((element) => {
    return element.classList.contains("active");
  });

  // console.log(previousSelection);

  // Loop through the list of links
  topMenuLinks.forEach((element) => {
    // Remove the active class from every links
    element.classList.remove("active");

    // Compare the current selection to the previous selection
    if (previousSelection === e.target) {
      // If current selection is similar to previous selection remove the active class
      e.target.classList.remove("active");
    } else {
      // Otherwise add the active class
      e.target.classList.add("active");
    }
  });

  for (let i = 0; i < menuLinks.length; i++) {
    // Assuming the about link was clicked close the sub-menu
    if (e.target.text === "about") {
      subMenuEl.style.top = 0;

      mainEl.querySelector("h1").textContent = "About" // PART 5

      break; // Exit the loop
    } else {
      // Assuming any other link was clicked
      // If the clicked link is not active (has been clicked twice) hide the sub-menu
      if (!e.target.classList.contains("active")) {
        subMenuEl.style.top = 0;
      } else {
        // Otherwise show the sub-menu
        subMenuEl.style.top = "100%";
        const selectedElement = menuLinks.find((element) => {
          return element.text === e.target.text;
        });

        // console.log(selectedElement);
        buildSubMenu(selectedElement.subLinks, subMenuEl);

        break;
      }
    }
  }
});

subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  
  const subMenuLinks = Array.from(subMenuEl.querySelectorAll("a"));

  if(!subMenuLinks.includes(e.target)) return;

  subMenuEl.style.top = 0;

  topMenuLinks.forEach((element) => {
    element.classList.remove("active");
  });

  const targetText = e.target.text.split(" ");

  const titleCaseText = targetText.map((element) => {
    return element[0].toUpperCase() + element.slice(1);
  });

  mainEl.querySelector("h1").textContent = titleCaseText.join(" ");
})
