const tasks = [
  {
    name: 'Write for Envato Tuts+',
    duration: 120
  },
  {
    'name': 'Work out',
    duration: 60
  },
  {
    name: 'Procrastinate on Duolingo',
    duration: 240
  }

];


const average = tasks.map(t=> t.duration)
  .reduce((prev, curr, index, array)=>{
  return prev + curr/array.length
}, 0);

console.log(average);