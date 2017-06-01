
//chaque appel Symbol() retourne une valeur unique
const RED = Symbol('RED');
const BLUE = Symbol('BLUE');

if(RED !== BLUE){
  console.log('RED is not BLUE');
}

//conversion implicite booleenne
if (RED) {
  console.log('un symbol est vrai');
}