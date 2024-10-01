// Part 3: Feeling Loopy
let csv0 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let tabular = (csv) => {
//   let data = "";

//   for (let i = 0; i < csv.length; i++) {
//     if (csv[i] !== "\n") {
//       data += csv[i];
//     } else {data += "\n"}
//   }
  
//   return data;
// }

// console.log(tabular(csv0));
// console.log();

// console.table(csv0);
// console.log();


let myArray = (csv) => {
  let data = csv.split('\n');
  let output = [];

  data.forEach((element) => {output.push(element.split(','));});
  return output;
}


let myObject = {};
let output = [];

let data = myArray(csv0).slice(1);
let keys = ['id', 'name', 'occupation', 'age'];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    console.log(data[i][j])
    myObject[keys[j]] = data[i][j];
    // output.push(myObject);
  }
}

console.log(output);