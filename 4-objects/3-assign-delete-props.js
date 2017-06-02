//declarer
const myObject = {
  anAtt: 'aValue',
  'the-attr': 3,
};

//non recommandé
myObject.newAttr = 123;
myObject['the-new-attr'] = 456;
console.log(myObject);

//preferer
Object.assign({}, myObject, { newAttr: 123, 'the-new-attr': 456 });

//si la clé d'un objet est égal au nom de la variable, il suffit d'ecrire la variable
const age = 5;
const person = {
  age
};

console.log(person);

//equivalent
const person2 = {
  age: age
};

//il est possible de supprimer des attributs d'objet : non recommandé
delete person.age;
console.log(person);



