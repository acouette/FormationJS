const myString = 'hello';

//concat
const concatenation = myString + ' world';
console.log(concatenation);

const es6StringInterpolation = `${myString} world`; //recommended
console.log(es6StringInterpolation);
console.log(es6StringInterpolation.length);

String.fromCharCode(54); // 6;


//conversion implicite booleenne
if('abcd'){
  console.log('\'abcd\' is true');
}
if(!''){
  console.log('\'\' is false');
}
