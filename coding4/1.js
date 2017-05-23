//detecting props

var person1 = {
  name: "Nicholas",
  sayName: function() {
    console.log(this.name);
  }
};
console.log("name" in person1); // true
console.log(person1.hasOwnProperty("name")); // true
console.log("toString" in person1); // true
console.log(person1.hasOwnProperty("toString"));


for(var i in person1){
  console.log(i);
}