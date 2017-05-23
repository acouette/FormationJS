function getFruitGenerator(){

    const fruits = ['banana', 'apple', 'mango'];

    let lastFruit;

    return {
        getNewFruit: function(){
            const possibleFruits = fruits.concat();
            if(lastFruit !== undefined) {
                possibleFruits.splice(fruits.indexOf(lastFruit), 1);
            }
            lastFruit = possibleFruits[Math.floor(Math.random() * possibleFruits.length)];
            return lastFruit;
        }
    }



}


const myFruitGenerator = getFruitGenerator();

console.log(myFruitGenerator.getNewFruit());
console.log(myFruitGenerator.getNewFruit());
console.log(myFruitGenerator.getNewFruit());
console.log(myFruitGenerator.getNewFruit());
console.log(myFruitGenerator.getNewFruit());
console.log(myFruitGenerator.getNewFruit());
console.log(myFruitGenerator.getNewFruit());
console.log(myFruitGenerator.getNewFruit());
console.log(myFruitGenerator.getNewFruit());