// The initial numbers that must be verified.
const n1 = 9;
const n2 = 15;
const n3 = 20;
const n4 = 6;


// Part 1: Math Problems
// Check one: add up to 50
const isSum = (n1 + n2 + n3 + n4);
console.log(`The sum is: ${isSum}`);

// Check two: divisible by 5
const divisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(`They are not all divisible by 5 so the result is: ${divisibleBy5}`);

// Check three: larger than last
const largerThanLast = n1 > n4 === true;
console.log(largerThanLast);

// Check four: Arithmetic chain
const arithmeticChain = (n2 - n1) * n3 / n4;
console.log(arithmeticChain);

// Check five: isOver25
const isOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isOver25);
console.log();


// Part 2: Practical Math
