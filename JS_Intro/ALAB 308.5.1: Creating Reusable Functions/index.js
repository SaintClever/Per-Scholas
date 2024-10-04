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


// Sort the array by age.
let orderByAge = arr.sort((a, b) => a.age - b.age);
console.log(orderByAge);
console.log();


// Filter the array to remove entries with an age greater than 50.
let lessThanFifthy = arr.filter((user) => user.age < 50);
console.group(lessThanFifthy);
console.log();


// Map the array to change the “occupation” key to “job” and increment every age by 1.
let occupation = arr.map((obj => {
  // Rename obj and delete original name
  obj.job = obj.occupation;
  delete obj.occupation;
  
  // parse age and add
  obj.age = parseInt(obj.age) + 1;

  return obj
}));
console.log(occupation);
console.log();


// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.
// 0 is the default initial value for the accumulator
let sumAndAverage = arr.reduce((accumulator, obj) => accumulator += obj.age, 0);
console.log(`Total: ${sumAndAverage}`);
console.log(`Average: ${sumAndAverage / arr.length}`);


// Part 3: Thinking Critically
// Take an object and increment its age field.