// Debugger / inspect
let helloWorld = "Hello World!";

// Exercise 1
let num = 10;

if (num > 0) {
  console.log("Positive");
  if (num > 100) {
    console.log("Greater than 100");
  } else {
    console.log("Less than 100");
  }
} else {
  console.log("Negative");
}
console.log();


// Exercise 2
let grade = 75;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 55) {
  console.log("D");
} else {
  console.log("F");
}


// Tenary
let x = 10;
let test;

(x == 10) ? test = true : test = false;
console.log(test);


// Error
if (true)  {
  try {
    console.log("Hello World!");
    throw "Creates custom error!";
  } catch(e) {
    console.error(e);
  } finally { // Loading window
    console.log("Page loaded!");
  }
}
