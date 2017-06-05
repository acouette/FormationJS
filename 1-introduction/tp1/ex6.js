const max = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

const maxResult = max(5, 6);

if (maxResult !== 6) {
  throw new Error('maxResult should be 6');
}

const minResult = min(1, 4);

if (minResult !== 1) {
  throw new Error('minResult should be 1');
}