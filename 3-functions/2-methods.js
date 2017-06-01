//les méthodes sont des attributs d'objets
const person = {
    name: 'Antoine',
    sayName: function () {
        return this.name;
    }, sayNameArrow: ()=> {
        return this.name;
    }
};
console.log(person.sayName());
console.log(person.sayNameArrow());



//on peut créer une fonction et l'attacher à des objets
function sayNameForAll() {
    return this.name;
}

const person1 = {
    name: 'Antoine',
    sayName: sayNameForAll
};

const person2 = {
    name: 'Alice',
    sayName: sayNameForAll
};

console.log(person.sayName());
console.log(person2.sayName());