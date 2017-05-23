const cat = {
    name: 'Guimauve',
    age: 9
};


console.log('name' in cat);
console.log('toString' in cat);

console.log(cat.hasOwnProperty('name'));
console.log(cat.hasOwnProperty('toString'));

for(let props in cat){
    console.log(props);
}