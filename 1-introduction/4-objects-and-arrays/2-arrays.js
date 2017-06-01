//Le type référence Array

//instancier et ajouter des entries : non recommandé
const myArray = new Array();
myArray[0] = 'coucou';
myArray[1] = 'coucou2';
console.log(myArray);

//préférer l'instanciation literale
const myOtherArray = ['coucou1', 'coucou2'];
console.log(myOtherArray);

//some methods
myOtherArray.push('coucou3'); //ajoute un élément à la fin
console.log(myOtherArray);

myOtherArray.pop(); //supprime supprime un élément à la fin du tableau et le retourne
console.log(myOtherArray);

myOtherArray.splice(0, 1, 'coucou4'); //modifie un tableau : (à l'index, nombre d'éléments à supprimer, éléments à ajouter)
console.log(myOtherArray);

myOtherArray.concat(['coucou5']);// retourne la concaténation de 2 tableaux sans les modifier

myOtherArray.concat(); //clone un tableau
