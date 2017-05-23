//classic declaration
function add(x, y){
    return x + y;
}
const sum = add(4, 5);
console.log(sum);


//as constant : has to be declared before usage
const sub = function(x, y){
    return x - y;
};
const subst = sub(4, 5);
console.log(subst);


//ES 2015
const multiply = (x, y) => {
    return x * y;
};

const multiplication = multiply(2, 4);
console.log(multiplication);
const multiply2 = x =>  x * 2;
const multiplication2 = multiply2(2, 4);
console.log(multiplication2);


//recap + move declaration to show

