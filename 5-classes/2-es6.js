//une nouvelle syntax est arrivé avec ES6

class Animal {

  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }

}

//Tout est similaire avec ES5 un fois le type définit

//instanciation
const a = new Animal('Guimauve');
a.sayName();
//on a bien une instance de Animal
console.log(a instanceof Animal); //true
//le constructeur de l'instance est la classe
console.log(a.constructor === Animal); //true
//prototype
console.log(Animal.prototype); // {}


//polymorphisme
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  miaow() {
    console.log(`miaow my name is ${this.name}`);
  }

}
const c = new Cat('Felix');
c.sayName();
c.miaow();

console.log(c instanceof Animal); //true
console.log(c instanceof Cat); //true

