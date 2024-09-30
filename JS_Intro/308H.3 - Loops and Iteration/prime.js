// Now, write a for loop that iterates from 1 to 20. The loop should:

// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.

for (let i = 1; i <= 20; i++) {
  if (i === 2) {
    console.log("Prime");
  }
  
  if (i <= 1 || i % 2 === 0) {
    console.log("Not prime");
  }

  if (i % 2 === 0) {
    console.log(`even\n`);
  }

  if (i % 2 !== 0) {
    console.log(`odd\n`);
  }
}


// Exercise
// Write while loops to accomplish the following tasks:

// Count down to 0 from a given number.
// Log integers in multiples of 3 as long as they are less than 35.
// Print integers in multiples of 5 as long as they are less than 100.
// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.
// Print all prime numbers between 0 and 20.


let num = 20;

while (num !== 0) {
  num--;

  if (num % 3 == 0 && num > 35) {console.log(num);}
  if (num % 5 == 0 && num < 100) {console.log(num);}

  if (num % 2 == 0) {
    console.log(num, num * 3);
  } continue;
  
}


let js = "JavaScript...🤮 Yuck!"

js_yuck: while (js === "JavaScript...🤮 Yuck!") {
  console.log(js);
  js = 'JavaScript is amazing!';
  console.log(js);
}