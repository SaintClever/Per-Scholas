function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}
console.log(areBothEven(1, 4));
console.log()



// Practice Activity 1: Write a Function DECLARATION;
function computeArea(width, height) {
  area = width * height;
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
}
console.log(computeArea(4, 5));
console.log();



// Practice Activity 2: Write a Function EXPRESSION
let planetHasWater = function(planet) {
  let planetCase = planet.toLowerCase();
  return planetCase === "earth" || planetCase === "mars" ? true: false;
}
console.log(planetHasWater('earTH'));
console.log();


// Practice Activity 2: Write a Function ARROW
let hasWater = (planet) => planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars" ? true: false;
console.log(hasWater('PluTO'));

åå

// SELF-STUDY - Disregard check //
// arguments keyword
let argumentsTest_00 = function(...hello) {
  console.log(typeof arguments, arguments);
  return hello;
}

console.log(argumentsTest_00('Hello', 'world'));
console.log();


// arguments keyword
let argumentsTest_01 = function(hello, world) {
  console.log(arguments);
  console.log(hello, world);
  return hello;
}

console.log(argumentsTest_01('Hello'));