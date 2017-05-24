//what we did until then
const person = {
  name: 'Marie',
  sayName: function(){
    console.log(this.name);
  }
};


//what is this ? a constructor
const Person = function () {
  this.name = 'Marie';
  this.sayName = function() {
    console.log(this.name);
  }
};

const p = new Person('marie');

console.log(p instanceof Person); //true
console.log(p.constructor === Person); //true


class PersonClass {

  constructor(name){
    this.name = name;
  }

  sayName(){
    console.log(this.name);
  }

}

const p2 = new PersonClass('Jules');

p2.sayName();

