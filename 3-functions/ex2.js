function getFruitGenerator() {

  const fruits = ['banana', 'apple', 'mango'];

  let lastFruit;

  return () => {
    const possibleFruits = fruits.concat();
    if (lastFruit !== undefined) {
      possibleFruits.splice(fruits.indexOf(lastFruit), 1);
    }
    lastFruit = possibleFruits[Math.floor(Math.random() * possibleFruits.length)];
    return lastFruit;
  }

}

const myFruitGenerator = getFruitGenerator();

console.log(myFruitGenerator());
console.log(myFruitGenerator());
console.log(myFruitGenerator());
console.log(myFruitGenerator());
console.log(myFruitGenerator());
console.log(myFruitGenerator());
console.log(myFruitGenerator());