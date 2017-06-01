const tasks = [
    {
        name: 'Write some code',
        duration: 120
    },
    {
        name: 'Eat',
        duration: 60
    },
    {
        name: 'Cut the grass',
        duration: 240
    }

];

const taskNames = tasks.map(t=> t.name);
console.log('taskNames', taskNames);

const taskWithDurationOver100 = tasks.filter(t=>t.duration > 100).map(t=> t.name);
console.log('taskWithDurationOver100', taskWithDurationOver100);


const average = tasks.map(t=> t.duration)
    .reduce((prev, curr, index, array)=> {
        return prev + curr / array.length
    }, 0);

console.log('average', average);