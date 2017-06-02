//preventExtensions

const person1 = {
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

const person2 = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person2)); // true
console.log(Object.isSealed(person2)); // false
Object.seal(person2);
console.log(Object.isExtensible(person2)); // false
console.log(Object.isSealed(person2)); // true
person2.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person2); // false
person2.name = "Greg";
console.log(person2.name); // "Greg"
delete person2.name;
console.log("name" in person2);
console.log(person2.name); // true
// "Greg"



var person3 = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person3));
console.log(Object.isSealed(person3));
console.log(Object.isFrozen(person3)); // true
// false
// false
Object.freeze(person3);
console.log(Object.isExtensible(person3));
console.log(Object.isSealed(person3));
console.log(Object.isFrozen(person3)); // false
// true
// true
person3.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person3); // false
person3.name = "Greg";
console.log(person3.name); // "Nicholas"
delete person3.name;
console.log("name" in person3);
console.log(person3.name); // true
// "Nicholas"
const descriptor = Object.getOwnPropertyDescriptor(person3, "name");
console.log(descriptor.configurable);
// false
console.log(descriptor.writable);
// false