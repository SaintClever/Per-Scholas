// Part 1: Growing Pains
let plant = (radius = 5, space = 0.8, plantCount = 20) => {
  // let radius = 5;
  // let space = 0.8;
  // let plantCount = 20;
  let weeks = plantCount * 2;

  const PI = 3.1415;
  const area = PI * radius * radius;

  
  let grow = true;

  while (grow) {
    if (plantCount > 16) {
      console.log('Plants need to be Pruned.');
      grow = false;
    } 
    else if (area > (.5 * plantCount) || area < (.8 * plantCount)) {
      console.log('Plants need to be Monitored.');
      grow = false;
    }
    else if (space > 0.8) {
      console.log('There is room to plant more plants');
      grow = false;
    }
  }

  return {
    'area': area,
    'space': space,
    'plantCount': plantCount,
    'weeks': weeks,
  }
}

console.log(plant());