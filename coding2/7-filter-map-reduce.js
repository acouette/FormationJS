



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




const people = [person1, person2, person3];



const onlyFemale = people.filter(p=> p.gender === 'F');

console.log(onlyFemale);

const withNameLength = people
  .map(p=> Object.assign({nameLength: p.name.length}, p));

console.log(withNameLength);


const sumAgeOfFemales = people
  .filter(p=> p.gender === 'F')
  .map(p=> p.age)
  .reduce((prev, curr)=>{
    return prev + curr;
  }, 0);



console.log(sumAgeOfFemales);


