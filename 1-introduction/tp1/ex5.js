const triangleSize = process.env.TRIANGLE_SIZE || 7;




for (let i = 0; i < triangleSize; i++) {
  let line = '';
  for (let j = 0; j < i + 1; j++) {
    line += '*';
  }
  console.log(line);
}