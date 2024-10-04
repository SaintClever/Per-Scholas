// Part 1: Thinking Functionally
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
      // longestWord.shift();
      longestWord.push(arr[i]);
    }
  }

  return longestWord;
}

console.log(longestString(["Take", "an", "array", "of", "strings", "and", "return", "the", "longest", "string.", "strings"]));


// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

