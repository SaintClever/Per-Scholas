// --- Part 1: Thinking Functionally --- //
// Take an array of numbers and return the sum.
let sum = (...nums) => {
  let total = 0;

  for (let i in nums) {
    total += nums[i];
  };

  return total;
};

console.log(sum(8, 6, 7, 5, 3, 0, 9));
console.log();


// Take an array of numbers and return the average.
let average = (...nums) => {
  let total = 0;

  for (let i in nums) {
    total += nums[i];
  }

  return total / nums.length;
}

console.log(average(10, 2, 38, 23, 38, 23, 21));
console.log();


// Take an array of strings and return the longest string.
let longestString = (arr) => {
  let letterCount = 0;
  let longestWord = [];

  for (let i in arr) {
    if (arr[i].length > letterCount) {
      letterCount = arr[i].length;
      // NOTE: What if same length?
      // longestWord.shift();
      longestWord.push(arr[i]);
    }
  }

  return longestWord;
}

console.log(longestString(["Take", "an", "array", "of", "strings", "and", "return", "the", "longest", "string.", "strings"]));
console.log();


// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
let stringsLongerThan = (arr, num) => {
  let longerThan = [];

  for (let i in arr) {
    if (arr[i].length > num) {
      longerThan.push(arr[i]);
    }
  }

  return longerThan;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
console.log();


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
let output = [];

let betweenOneN = (n) => {
  if (n !== 2) {
    n--;
    betweenOneN(n);
    output.push(n);
  }
  
  return output;
}

console.log(betweenOneN(20));
console.log();


//--- Part 2: Thinking Methodically ---//
let arr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]


for (let i in arr) {
  console.log(arr[i]);
}