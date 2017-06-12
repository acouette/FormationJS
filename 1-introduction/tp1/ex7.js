const sentence = 'the weather is beautiful today';

const split = sentence.split(' ');

for (let i = 0; i < split.length; i++) {
  if (i % 2 === 1) {
    console.log(split[i].toUpperCase());
  } else {
    console.log(split[i].toLowerCase());
  }
}

const toMirror = 'toto';

const reverse1 = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i > -1; i--) {
    reversed+=str.charAt(i);
  }
  return reversed;
};

console.log(reverse1(toMirror));


const reverse2 = str => str.split('').reverse().join('');

console.log(reverse2(toMirror));