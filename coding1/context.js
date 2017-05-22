//counter
const counter = (function(){
  let i = 0;

  return {
    inc: ()=> i++,
    getValue: ()=> i
  }

})();


counter.inc();
counter.inc();
console.log(counter.getValue());





const Person = function Person(){
  let age = 0;
  return {
    getAge: ()=> age,
    setAge: (ageP)=> age = ageP
  }
};

const person = new Person();
person.setAge(4);
console.log(person.getAge());
