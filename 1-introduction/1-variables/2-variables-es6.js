//en es6, on peut déclarer une const, qui ne peut pas changer de valeur
const constant = 'my final data';
console.log(constant);
try {
  constant = 3;
} catch (e) {
  console.error(e.message);
}

//en es6, on peut déclarer un let qui peut changer de valeur
let variable = 'my variable';
console.log(variable);
variable = 'my modified value';
console.log(variable);


//Quelle différence entre const/let et var ?

//=> on crée un scope sous un bloc
{
  var inner = 'inner';
  let inner2 = 'inner2';
}
// le var est accessible dans tous le contexte de la fonction ou du script
// le let et const ne sont accessible que dans le bloc.
console.log(inner);
try {
  console.log(inner2);
} catch (e) {
  console.error(e.message);
}



