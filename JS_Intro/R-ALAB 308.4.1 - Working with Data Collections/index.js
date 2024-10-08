// Part 2: Expanding Functionality
let csv0 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


let myArray = (csv) => {
  let data = csv.split('\n');
  let output = [];

  data.forEach((element) => {output.push(element.split(','));});
  return output;
}
console.log(myArray(csv0));
console.log();



// Part 3: Feeling Loopy
let data = myArray(csv0).slice(1);  // Skip the header row
let keys = ['id', 'name', 'occupation', 'age'];

let output = [];

for (let i = 0; i < data.length; i++) {
  let myObject = {};  // Create a new object for each row
  for (let j = 0; j < keys.length; j++) {
    // console.log(keys);
    myObject[keys[j]] = data[i][j];
  }
  output.push(myObject);
}

console.log(output);
console.log();



// Part 4: Sorting and Manipulating Data
// 1, Remove the last element from the sorted array.
output.pop();
console.log(output);
console.log();



// 2. Insert the following object at index 1:
output.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(output);
console.log();


// 3. Add the following object to the end of the array:
output.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(output);
console.log();


// Part 5: Full Circle
let backToCsv = `${Object.keys(output[0])}\n`;

for (let i in output) {
  backToCsv += `${Object.values(output[i])}\n`;
}

console.log(backToCsv);