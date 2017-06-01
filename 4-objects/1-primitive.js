//les primitifs et les wrapper
const primitiveString = 'hello world';
const referenceTypeString = new String('hello world');

//on utilise jamais les references mais elles sont utilsées par l'intepreteur
//si l'on fait
const upper = primitiveString.toUpperCase();
//l'interpreteur execute
const upper2 = new String(upper).toUpperCase();
//c'est l'autoboxing

//pour tester les types des types primitifs
console.log(typeof 'abc' === 'string');
console.log(typeof 1 === 'number');
console.log(typeof true === 'boolean');
console.log(typeof Symbol() === 'symbol');
console.log(typeof undefined === 'undefined');
console.log(typeof null === 'object'); //!!!!!!!!
