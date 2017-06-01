function add(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}

//on peut passer le nombre d'argument que l'on veut
add(2, 3);
//si pas assez, la valeur sera undefined dans la fonction
add(2);
//s'il y en a trop
add(2, 3, 4);


//le mot clé arguments
function addAllArgs() {
    //argument n'est pas un array, pas de reduce
    let value = 0;
    for (let i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}
console.log(addAllArgs(2, 3, 7));


//showcase overloading es5
function addWithOverload(a, b) {
    if (b === undefined) {
        return a;
    }
    return a + b;
}

console.log(addWithOverload(2));
console.log(addWithOverload(2, 5));


//ES6 arrow functions

const addES6 = (a, b) => {
    console.log(a);
    console.log(b);
};
//meme comportement
addES6(4, 5);
addES6(4);
addES6(4, 5, 6);


//default value

const addWithDefault = (a, b = 0) => {
    return a + b;
};

console.log(addWithDefault(4));

//object as param
const addFromObject = (obj)=> obj.a + obj.b;
console.log(addFromObject({a: 1, b: 2}));


//destructuing
const addDestructuring = ({a, b}) => {
    return a + b;
};
console.log(addDestructuring({a: 1, b: 2}));