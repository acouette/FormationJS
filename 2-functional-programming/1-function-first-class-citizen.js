function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

//prend en argument une fonction ainsi que 2 autres paramètre
function callFunction(functionAsArgument, a, b) {
    //la fonction invoque ensuite la fonction avec les paramètres
    return functionAsArgument(a, b);
}

const addResult = callFunction(add, 3, 5);
console.log(addResult);
const multiplyResult = callFunction(multiply, 3, 7);
console.log(multiplyResult);

//possibilité de définir la fonction directement
const addResult2 = callFunction(function (a, b) {
    return a + b;
}, 4, 6);
console.log(addResult2);

//autre possibilité avec les arrow fonctions
const addResult3 = callFunction((a, b)=> a + b, 5, 5);
console.log(addResult3);

//exemple dans l'api
setTimeout(()=>console.log('finally called !'), 2000);