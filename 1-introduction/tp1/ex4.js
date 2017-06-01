const triangleSize = process.argv[2];

for (let i = 0; i < triangleSize; i++) {
  let line = '';
  for (let j = 0; j < i + 1; j++) {
    line += '*';
  }
  console.log(line);
}