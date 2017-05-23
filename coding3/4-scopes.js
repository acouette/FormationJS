function getIncrementer() {

    let val = 0;

    return {
        incrementAndGet: function(){
            val++;
            return val;
        }
    }


}


const incrementer = getIncrementer();

console.log(incrementer.incrementAndGet());
console.log(incrementer.incrementAndGet());
console.log(incrementer.incrementAndGet());
console.log(incrementer.incrementAndGet());
