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
  return planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars" ? true: false;
}
console.log(planetHasWater('earTH'));
console.log();


// Practice Activity 2: Write a Function ARROW
let hasWater = (planet) => planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars" ? true: false;
console.log(hasWater('earTH'));