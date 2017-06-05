//Numbers can be integer
const myInteger = 4;
//or floats
const myFloat = 4.3;

//operators
const myAdd = 8 + myInteger; // 12
const mySubstraction = 8 - myInteger; //4
const myDivision = 8 / myInteger;  //2
const myMultiple = 8 * myInteger; //16
const mySquare = 8 ** 2; //64

const myNumberAsString = '123';
const myNumberFromString = parseInt(myNumberAsString, 10); // 123;
Number.isInteger(myInteger); //true


//arithmetic floating points
console.log(0.2 + 0.1);



//conversion implicite booleenne
if(4){
  console.log('4 is true');
}
if(!0){
  console.log('0 is false');
}







