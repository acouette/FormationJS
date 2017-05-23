//preventExtensions

var person1 = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person1)); // true
Object.preventExtensions(person1);
console.log(Object.isExtensible(person1)); // false
person1.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person1);
// false



//seal

var person1 = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false
Object.seal(person1);
console.log(Object.isExtensible(person1)); // false
console.log(Object.isSealed(person1)); // true
person1.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person1); // false
person1.name = "Greg";
console.log(person1.name); // "Greg"
delete person1.name;
console.log("name" in person1);
console.log(person1.name); // true
// "Greg"



var person1 = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person1));
console.log(Object.isSealed(person1));
console.log(Object.isFrozen(person1)); // true
// false
// false
Object.freeze(person1);
console.log(Object.isExtensible(person1));
console.log(Object.isSealed(person1));
console.log(Object.isFrozen(person1)); // false
// true
// true
person1.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person1); // false
person1.name = "Greg";
console.log(person1.name); // "Nicholas"
delete person1.name;
console.log("name" in person1);
console.log(person1.name); // true
// "Nicholas"
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.configurable);
// false
console.log(descriptor.writable);
// false