const items = new Array();
const now = new Date();
const error = new Error("Something bad happened.");
const func = new Function("console.log('Hi');");
const object = new Object();
const re = new RegExp("\\d+");

//prefer litteral form

const itemsLit = [];

const objectLit = {
  anAtt: 'coucou',
  'the-attr' : 456
};


//access properties
console.log(objectLit.anAtt);
console.log(objectLit['the-attr']);


//identify reference type

//typeof for functions !

//instanceof for others








