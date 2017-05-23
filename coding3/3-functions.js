//-------------------
//declaration
//-------------------

//
//
// function add(){
//
// }
//
// const add2 = function(){
//
// };
//
// //ES2016
//
// const add3 = () => {
//
// };

//-------------------
//Paramètre
//-------------------

// function add(a, b){
//   console.log(a);
//   console.log(b);
// }
//
// add(2,3);
// add(2);
// add(2,3,4);

// function add() {
//   let value = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     value += arguments[i];
//   }
//   return value;
// }
//
// console.log(add(2, 3, 7));

// function add(a, b) {
//   if (b === undefined) {
//     return a;
//   }
//   return a + b;
// }
//
// console.log(add(2));
// console.log(add(2, 5));

// const add = (a,b) => {
//   console.log(a);
//   console.log(b);
// };
//
// add(4,5);
// add(4);
// add(4,5,6);

// const add = (a, b = 0) => {
//   return a + b;
// };
//
// console.log(add(4));

//-------------------
//Object methods
//-------------------

// const person = {
//   name: 'Antoine',
//   sayName: function(){
//     return this.name;
//   }
// };
// console.log(person.sayName());

// function sayNameForAll(){
//   return this.name;
// }
//
// const person1 = {
//   name: 'Antoine',
//   sayName: sayNameForAll
// };
//
// const person2 = {
//   name: 'Alice',
//   sayName: sayNameForAll
// };
//
// console.log(person.sayName());
// console.log(person2.sayName());

//-------------------
// call, apply, bind
//-------------------

// function sayNameForAll(){
//   console.log(this.name);
// }
//
// const person1 = {
//   name: 'Antoine',
// };
//
// const person2 = {
//   name: 'Alice',
// };
//
// const sayNameForAntoine = sayNameForAll.bind(person1);
// const sayNameForAlice = sayNameForAll.bind(person2);
// sayNameForAlice();

// function sayNameForAll(label){
//   console.log(`${this.name} is saying : ${label}`);
// }
//
// sayNameForAll.call(person1, 'wtf');
// sayNameForAll.apply(person1, ['wtf']);