//declaration classique
function add(x, y) {
    return x + y;
}
const sum = add(4, 5);
console.log(sum);


//assigner une fonction à une constante
const sub = function (x, y) {
    return x - y;
};
const subst = sub(4, 5);
console.log(subst);


//ES 2015 arrow function
const multiply = (x, y) => {
    return x * y;
};

const multiplication = multiply(2, 4);
console.log(multiplication);
const multiply2 = x => x * 2;
const multiplication2 = multiply2(2);
console.log(multiplication2);


module.exports = {
    name: 'jules',
    sayHello: ()=> console.log('hello')
};





var i;