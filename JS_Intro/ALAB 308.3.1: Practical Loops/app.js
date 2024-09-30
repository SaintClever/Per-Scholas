// Part 1: Fizz Buzz
let num = 100;

for (let i = 0; i < num; i++) {
  if (i % 5 == 0 && i % 3 == 0) {console.log(i, ": Fizz Buzz");}
  else if (i % 5 == 0) {console.log(i, ": Buzz");}
  else if (i % 3 == 0) {console.log(i, ": Fizz");}
}
console.log();


// Part 2: Prime Time
if (num < 1) {
  console.log(num, "not prime");
}
console.log();


// Part 3: Feeling Loopy
let csv0 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let tabular = (csv) => {
  let data = "";

  for (let i = 0; i < csv.length; i++) {
    if (csv[i] !== "\n") {
      data += csv[i];
    } else {data += "\n"}
  }
  
  return data;
}

console.log(tabular(csv0));
console.log();

console.table(csv0);
console.log();


let csv1 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
console.log(tabular(csv1));
console.log();

console.table(csv1);