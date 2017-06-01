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
}, {
    name: 'Matthieu',
    age: 42,
    gender: 'M'
}, {
    name: 'Maureen',
    age: 62,
    gender: 'F'
}
];

const onlyFemale = people.filter(p=> p.gender === 'F');
console.log(onlyFemale);



const sumAgeOfFemales = people
    .filter(p=> p.gender === 'F')
    .map(p=> p.age)
    .reduce((prev, curr)=> prev + curr, 0);
console.log(sumAgeOfFemales);

const mappedPeople = people.map(person=> Object.assign({}, person, {nameLength: person.name.length}));
console.log(mappedPeople);


