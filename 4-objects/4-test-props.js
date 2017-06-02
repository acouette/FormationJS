const cat = {
    name: 'Guimauve',
    age: 9
};

//il est possible de tester si les propriétés d'un objet existent
console.assert('name' in cat);
//ici toString appartient au prototype d'Object
console.log('toString' in cat);

//hasOwnProperty vérifie si la propriété est sans l'héritage
console.log(cat.hasOwnProperty('name'));
console.log(cat.hasOwnProperty('toString'));

for(let props in cat){
    console.log(props);
}