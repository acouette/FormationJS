function getFruitGenerator() {

    const fruits = ['banana', 'apple', 'mango'];

    let lastFruit;

    return () => {
        const possibleFruits = fruits.filter(f=> f !== lastFruit);
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