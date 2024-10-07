// Part 1: Growing Pains
let plant = (radius = 5, plantSpace = 0.8, plantCount = 20, weeks = 2) => {
  const PI = 3.1415;
  const area = PI * radius * radius;
  let maxCapacity = Math.floor(area / plantSpace);
  
  let weeksPast = 0;

  let plantData = {
    'area': area,
    'plantSpace': plantSpace,
    'plantCount': plantCount,
    'weeks': weeks,
  }

  while (weeksPast !== weeks) {
    weeksPast += 1;
    if (maxCapacity > (plantCount * plantSpace)) {
      console.log('Plants need to be Pruned.');
    } 
    else if (maxCapacity === (plantCount * plantSpace)) {
      console.log('Plants need to be Monitored.');
    }
    else if ((plantCount * plantSpace) < maxCapacity) {
      console.log('There is room to plant more plants');
    }
    console.table(plantData);
  }

  return {
    'area': area,
    'plantSpace': plantSpace,
    'plantCount': plantCount,
    'weeks': weeks,
  }
}

console.log(plant());