//exemple de scope de fonction
function getIncrementer() {

  let val = 0;

  return () => {
    val++;
    return val;
  }

}


const incrementer = getIncrementer();
const incrementer2 = getIncrementer();

console.log(incrementer());
console.log(incrementer());
console.log(incrementer());
console.log(incrementer());
console.log(incrementer2());
console.log(incrementer2());