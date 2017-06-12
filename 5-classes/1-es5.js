//jusqu'à présent, nous avons instancié directement des objets (classe Object)
const animal = {
  name: 'Guimauve',
  sayName: function () {
    console.log(this.name);
  }
};

//Pour créer une nouvelle classe (par défaut sous classe de Object)
//c'est à dire un model à instancier
const Animal = function (name) {
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
};


//instanciation
const a = new Animal('Guimauve');
a.sayName();

//on a bien une instance de Animal
console.log(a instanceof Animal); //true

//le constructeur de l'instance est la classe
console.log(a.constructor === Animal); //true

//prototype
console.log(Animal.prototype); // {}

//on peut ajouter des fonctions sur le prototype
Animal.prototype.sayWow = function () {
  console.log(`${this.name} says Wow`);
};
//elles sont accessible à toutes les instances
a.sayWow();



//polymorphisme
//On définit un type
const Cat = function (name) {
  this.name = name;
  this.miaow = function () {
    console.log(`miaow my name is ${this.name}`);
  }
};

//on définit son prototype comme étant une instance de la classe parente (sinon c'est un instance d'objet par défaut)
Cat.prototype = new Animal();
//on "rectifie" le constructeur du prototype
Cat.prototype.constructor = Cat;


const c = new Cat('Felix');
c.sayName();
c.miaow();

console.log(c instanceof Animal); //true
console.log(c instanceof Cat); //true







