const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (input) => {
  const valueAsNumber = parseInt(input, 10);
  if(valueAsNumber < 20){
    console.log('vous êtes jeunes');
  }else if(valueAsNumber > 60){
    console.log('vous êtes vieux');
  }else if(valueAsNumber <30){
    console.log("vous n'êtes plus tout jeune et pas complètement vieux");
  }

});