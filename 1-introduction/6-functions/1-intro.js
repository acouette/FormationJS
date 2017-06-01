//declaration classique
function add(x, y){
    return x + y;
}
const sum = add(4, 5);
console.log(sum);


//hoisting
sum2 = add2(4, 2);
console.log(sum2);
function add2(x, y){
  return x + y;
}
var sum2;


//assigner une fonction à une constante
const sub = function(x, y){
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
const multiply2 = x =>  x * 2;
const multiplication2 = multiply2(2);
console.log(multiplication2);




