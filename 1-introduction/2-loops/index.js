//for
for (let i = 0; i < 3; i++) {
  console.log('loop number : ' + i);
}

//while
let i = 0;
while (i < 3) {
  console.log(i++);
}

//while
let j = 0;
do {
  console.log(j++);
} while (j < 3);

for (let item of ['kiwi', 'banana']) {
  console.log(item);
}

const myObject = { name: 'john', age: 12 };
for (let item in myObject) {
  console.log(item);
  console.log(myObject[item]);
}