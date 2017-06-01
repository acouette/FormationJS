//declare


const myObject = {
    anAtt: 'aValue',
    'the-attr': 3,
};

//not recommended because mutation
myObject.newAttr = 123;
myObject['the-new-attr'] = 456;

console.log(myObject);


const age = 5;
const person = {
    age
};

console.log(person);


delete person.age;

console.log(person);


