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
        return this.students.map(s => s.age).reduce((prev, curr, index, array) => {
            return prev + curr / array.length;
        }, trim || 0);
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


const fakeUniversity = {
    students: hackers
};
const hackedMethod = university.averageAge.bind(fakeUniversity);
console.log(hackedMethod(3));

const hackedResultWithTrim = university.averageAge.call(fakeUniversity, -2);
console.log(hackedResultWithTrim);

