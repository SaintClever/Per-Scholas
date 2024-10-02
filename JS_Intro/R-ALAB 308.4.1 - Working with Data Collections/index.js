// Part 3: Feeling Loopy
let csv0 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


let myArray = (csv) => {
  let data = csv.split('\n');
  let output = [];

  data.forEach((element) => {output.push(element.split(','));});
  return output;
}
console.log(myArray(csv0));
console.log();




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