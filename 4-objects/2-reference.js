//voici tous les built in types
//mode d'instanciation classique
const items = new Array();
const now = new Date();
const error = new Error("Something bad happened.");
const func = new Function("console.log('Hi');");
const object = new Object();
const re = new RegExp("\\d+");

//preferer la forme litterale
const itemsLit = [];

const objectLit = {
  anAtt: 'coucou',
  'the-attr' : 456
};


//pour identifier les functions on utilise encore typeof
console.log(typeof func);


//sinon instanceof
console.log(now instanceof Date);
console.log(items instanceof Array);
console.log(error instanceof Error);
console.log(object instanceof Object);
console.log(re instanceof RegExp);







