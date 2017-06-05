//and
console.log('false && false : ' + (false && false));
console.log('true && false : ' + (true && false));
console.log('true && true : ' + (true && true));

console.log('true && 4 : ' + (true && 4));


//or
console.log('false || false : ' + (false || false));
console.log('true || false : ' + (true || false));
console.log('true || true : ' + (true || true));

console.log('false || 4 : ' + (false || 4));


// ===
console.log('4 === 4', 4 === 4);
console.log('\'abcd\' === \'abcd\' : '+ ('abcd' === 'abcd'));
console.log('\'\' === false : '+ ('' === false));
const myObject = {};
console.log('myObject === myObject : '+ (myObject === myObject));
const myOtherObject = {};
console.log('myObject !== myOtherObject : '+ (myObject !== myOtherObject));

// ==
//attention, l'opérateur == fait de la conversion implicite si nécéssaire avant de comparer.
console.log('\'\' == false : '+ ('' == false));
