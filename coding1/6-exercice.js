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


//put them in an array
const people = [person1, person2, person3];


// create a loop that only displays females
// hint 1 : there are two attributes on arrays : length and push
for (let i = 0; i < people.length; i++) {
    if(people[i].gender === 'F'){
        console.log(people[i]);
    }
}


//by looping on the array, add a property to each person named 'nameLength' representing the number of letters in their name
//then print the array
for (let i = 0; i < people.length; i++) {
    people[i].nameLength = people[i].name.length;
}
console.log(people);


