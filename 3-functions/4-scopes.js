//exemple de scope de fonction
function getIncrementer() {

  var val = 0;

  return () => {
    val++;
    return val;
  }

}

try{
  console.log(val);
}catch(err){
  console.error(err.message);
}

const incrementer = getIncrementer();

console.log(incrementer());
console.log(incrementer());
console.log(incrementer());
console.log(incrementer());
