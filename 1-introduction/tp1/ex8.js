//instantiate and assign to a variable 3 objects with the following attributes : name, age, gender

const person1 = {
    name: 'Jules',
    age: 0,
    gender: 'M',
};

const person2 = {
    name: 'Marie',
    age: 2,
    gender: 'F'
};

const person3 = {
    name: 'Alice',
    age: 34,
    gender: 'F'
};

const person4 = {
    name: 'Matthieu',
    age: 42,
    gender: 'M'
};

const person5 = {
    name: 'Maureen',
    age: 62,
    gender: 'F'
};


const people = [person1, person2, person3, person4, person5];


// afficher Uniquement les femmes de la liste et la somme de leurs ages
let ageSum = 0;
for (let i = 0; i < people.length; i++) {
    if (people[i].gender === 'F') {
        ageSum += people[i].age;
        console.log(people[i]);
    }
}
console.log(`sum of female ages : ${ageSum}`);



//Ecrire une boucle for qui ajoute un attribut sur chaque objet : nameLength
for (let i = 0; i < people.length; i++) {
    people[i].nameLength = people[i].name.length;
}
console.log(people);


