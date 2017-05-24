//ES5 inheritance out of scope


class PersonClass {

  constructor(name){
    this.name = name;
  }

  sayName(){
    console.log(this.name);
  }

}

class Student extends PersonClass{

  constructor(name, grade){
    super(name);
    this.grade = grade;
  }

  sayGrade(){
    console.log(this.grade);
  }

}

const s = new Student('Bob', 4);
s.sayName();
s.sayGrade();

