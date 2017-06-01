for (let i = 1; i <= 10; i++) {
  console.log(`table des ${i}`);
  let table = '';
  for (let j = 1; j <= 10; j++) {
    table+= `${i}*${j} = ${i*j} ; `;
  }
  console.log(table);
}