function sayNameForAll(){
  console.log(this.name);
}

const person1 = {
  name: 'Antoine',
};

const person2 = {
  name: 'Alice',
};

const sayNameForAntoine = sayNameForAll.bind(person1);
const sayNameForAlice = sayNameForAll.bind(person2);
sayNameForAlice();

function sayNameForAll(label){
  console.log(`${this.name} is saying : ${label}`);
}

sayNameForAll.call(person1, 'wtf');
sayNameForAll.apply(person1, ['wtf']);