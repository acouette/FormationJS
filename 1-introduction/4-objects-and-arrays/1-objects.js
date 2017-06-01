//Le type référence Object

//instancier et ajouter des attributs : non recommandé
const person = new Object();
person.age = 8;
console.log(person);
console.log(person.age);

//instancier en literal en définissant directement les attributs
const cat = {
  age: 10,
  name: 'Guimauve'
};

//itérer sur les properties
//boucle for
for (let prop in cat) {
  if (cat.hasOwnProperty(prop)) {
    console.log(prop);
    console.log(cat[prop]);
  }
}

//préférer Object.keys pour itérer sur les properties
console.log(Object.keys(cat));

//et Object.values pour itérer sur les valeurs
console.log(Object.values(cat));

//Object.assign permet de cloner un objet et/ou surcharger/ajouter des attributs
//recommandé plutôt que de muter l'objet.
const clonedScaryCat = Object.assign({}, cat, { name: 'mystery', scary: true });
console.log('clonedScaryCat : ', clonedScaryCat);