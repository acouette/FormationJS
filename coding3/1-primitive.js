

const i = 3;

console.log(i.toString());

const j = '456';

console.log(parseInt(i,10));


var name = "Nicholas";
var firstChar = name.charAt(0);
console.log(firstChar); // "N"
//This is what happens behind the scenes:
// what the JavaScript engine does
  var name = "Nicholas";
var temp = new String(name);
var firstChar = temp.charAt(0);
console.log(firstChar);