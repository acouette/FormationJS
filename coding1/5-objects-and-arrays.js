
//declare an object
const person = new Object();
console.log(person);
person.age = 8;
console.log(person.age);

//ok but not great
const cat = {
    age: 10,
    name: 'Guimauve'
};
console.log(cat);

//its like a map !

//old way
for(let prop in cat){
  if(cat.hasOwnProperty(prop)){
    console.log(prop);
  }
}

//better
console.log(Object.keys(cat));

//also
console.log(Object.values(cat));
const clonedScaryCat = Object.assign({}, cat);
console.log('clonedScaryCat : ', clonedScaryCat);


// Arrays

const myArray = new Array();
myArray[0] = 'coucou';
myArray[1] = 'coucou2';
console.log(myArray);

//ok but not great
//prefer :
const myOtherArray = ['coucou1', 'coucou2'];
console.log(myOtherArray[1]);

//some methods
myOtherArray.push('coucou3');
console.log(myOtherArray);
myOtherArray.pop();
console.log(myOtherArray);
myOtherArray.splice(0,1, 'coucou4');
console.log(myOtherArray);


//talk about lodash