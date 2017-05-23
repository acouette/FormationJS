const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0;

rl.on('line', (input) => {

  sum+=stringToNumber(parseInt(input, 10));

  console.log(sum);


});