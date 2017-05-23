const university = {

  students: [
    {
      age: 19
    },
    {
      age: 22
    },
    {
      age: 21
    }
  ],

  averageAge: function (trim) {
    let reduced = this.students.map(s => s.age).reduce((prev, curr, index, array) => {
      return prev + curr / array.length;
    }, 0);
    if (!trim) {
      return reduced;
    }
    return reduced + trim;
  }

};

console.log(university.averageAge());
console.log(university.averageAge(2));

const hackers = [
  {
    age: 14
  },
  {
    age: 16
  },
  {
    age: 15
  }
];

const hackedMethod = university.averageAge.bind({ students: hackers });
console.log(hackedMethod(3));

const hackedResultWithTrim = university.averageAge.call({ students: hackers }, -2);
console.log(hackedResultWithTrim);

