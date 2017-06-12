//dans un module node, this === module.exports
console.log('this === module.exports', this === module.exports);

//dans une fonction appelée depuis le module (pas sur un objet), this === global
(function aFunction(){
    console.log('this === global', this === global);
})();

//les méthodes sont des attributs d'objets
const person = {
    name: 'Antoine',
    sayName: function () {
        return this.name;
    }, sayNameArrow: ()=> {
        return this.name;
    },
    sayNameLikeArrow: (function (self) {
        return function () {
            console.log(self.name);
        }
    })(this)
};

console.log(person.sayName());
console.log(person.sayNameArrow());
console.log(person.sayNameLikeArrow());


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