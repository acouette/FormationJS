function getIncrementer() {

  let val = 0;

  return () => {
    val++;
    return val;
  }

}

const incrementer = getIncrementer();

console.log(incrementer());
console.log(incrementer());
console.log(incrementer());
console.log(incrementer());
