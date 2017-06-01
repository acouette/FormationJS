//and
console.log('false && false : ' + (false && false));
console.log('true && false : ' + (true && false));
console.log('true && true : ' + (true && true));

//or
console.log('false || false : ' + (false || false));
console.log('true || false : ' + (true || false));
console.log('true || true : ' + (true || true));

// ===
console.log('4 === 4', 4 === 4);
console.log('\'abcd\' === \'abcd\' : '+ ('abcd' === 'abcd'));
console.log('\'\' === false : '+ ('' === false));
const myObject = {};
console.log('myObject === myObject : '+ (myObject === myObject));
const myOtherObject = {};
console.log('myObject !== myOtherObject : '+ (myObject !== myOtherObject));

// ==
//attention, l'opérateur == fait de la conversion implicite booleenne avant de comparer les booléens.
console.log('\'\' == false : '+ ('' == false));

//if
if(true){
  console.log('executed if true');
}