function add(a, b){
  console.log(a);
  console.log(b);
}

add(2,3);
add(2);
add(2,3,4);

//////////////////////////

function add() {
  let value = 0;
  for (let i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }
  return value;
}

console.log(add(2, 3, 7));


//////////////////

function add(a, b) {
  if (b === undefined) {
    return a;
  }
  return a + b;
}

console.log(add(2));
console.log(add(2, 5));

////////////////////////////

const add = (a,b) => {
  console.log(a);
  console.log(b);
};

add(4,5);
add(4);
add(4,5,6);

////////////////////

const add = (a, b = 0) => {
  return a + b;
};

console.log(add(4));

////////////////

const add = ({a, b}) => {
    return a + b;
};

console.log(add({a:1, b: 2}));