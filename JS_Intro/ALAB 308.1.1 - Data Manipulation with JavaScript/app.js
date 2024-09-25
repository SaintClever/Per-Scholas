// The initial numbers that must be verified.
const n1 = 9;
const n2 = 15;
const n3 = 20;
const n4 = 6;


// --- Part 1: Math Problems --- //
// Check one: add up to 50
const isSum = (n1 + n2 + n3 + n4);
console.log(`The sum is: ${isSum}`);

// Check two: divisible by 5
const divisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(`Are ALL values divisible by 5: ${divisibleBy5}`);

// Check three: larger than last
const largerThanLast = n1 > n4 === true;
console.log(`Is n1 greater than n4: ${n1} > ${n4}: ${largerThanLast}`);

// Check four: Arithmetic chain
const arithmeticChain = (n2 - n1) * n3 / n4;
console.log(`(n2 - n1) * n3 / n4 = ${arithmeticChain}`);

// Check five: isOver25
const isOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`The result should be: ${isOver25}`);
console.log();


// --- Part 2: Practical Math --- //
let miles = 1500;
let budget = 175;
let cost = 3; // cost per gallon
let gallons = 23;
let hours = 5;

let mph = miles / hours;
let mpg = miles / gallons;
let total = (miles / mpg) * cost; // Total fuel cost

console.log(`Miles Per Gallon: ${mpg.toFixed(2)}\nTotal Cost: ${total.toFixed(2)}`);
console.log(`At ${mph} miles per hour, you get ${mpg.toFixed(2)} miles per gallon.`);






