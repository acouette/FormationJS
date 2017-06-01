//tableau d'objets
const people = [{
    name: 'Jules',
    age: 0,
    gender: 'M',
}, {
    name: 'Marie',
    age: 2,
    gender: 'F'
}, {
    name: 'Alice',
    age: 34,
    gender: 'F'
}];

//filtrer les éléments du tableau en fonction d'un predicat
const onlyAdults = people.filter(p=> p.age >= 18);
console.log(onlyAdults);

//mapper les éléments d'un tablau
const names = people.map(p=> p.name);
console.log(names);

//reduire un tableau : accumulateur
const accumulation = [4, 8, 6].reduce((prev, cur, index, array)=> prev + cur, 0);
console.log(accumulation);


//chaining : la concaténation des noms des femmes
const namesOfFemales = people
    .filter(p=> p.gender === 'F')
    .map(p=> p.name)
    .reduce((prev, curr)=> prev + curr, '');
console.log(namesOfFemales);


