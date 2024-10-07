// Part 1: Growing Pains
let plant = (radius = 5, plantSpace = 0.8, plantCount = 20, weeks = 2) => {
  const PI = 3.1415;
  const area = PI * radius * radius;
  let maxCapacity = Math.floor(area / plantSpace);
  
  let grow = true;

  while (grow) {
    if (plantCount > plantSpace * maxCapacity) {
      console.log('Plants need to be Pruned.');
      grow = false;
    } 
    else if (area > (.5 * plantCount) || area < (.8 * plantCount)) {
      console.log('Plants need to be Monitored.');
      grow = false;
    }
    else if (plantCount < (.5 * maxCapacity)) {
      console.log('There is room to plant more plants');
      grow = false;
    }
  }

  return {
    'area': area,
    'plantSpace': plantSpace,
    'plantCount': plantCount,
    'weeks': weeks,
  }
}

console.log(plant());