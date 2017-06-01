function sayNameForAll() {
    console.log(this.name);
}

const person1 = {
    name: 'Jonh',
};

const person2 = {
    name: 'Mike',
};

//bind génère une fonction à partir d'une fonction. Dans cette nouvelle fonction, this correpondra toujours à person1
const sayNameForJonh = sayNameForAll.bind(person1);
sayNameForJonh();
const sayNameForMike = sayNameForAll.bind(person2);
sayNameForMike();

function someoneSaysSomething(text, numberOfTimes) {
    console.log(`${this.name} is saying : ${text} ${numberOfTimes} times`);
}

//call sert à invoquer une fonction en forcant le this
someoneSaysSomething.call(person1, 'hello', 2);
//idem pour apply sauf que les arguments sont passés sous forme de tableau
someoneSaysSomething.apply(person2, ['bye', 4]);