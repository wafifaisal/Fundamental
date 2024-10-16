const roman: { [x: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function myFunc(str: string) {
  str = str.toUpperCase();
  let tambah = 0;

  for (let i = 0; i < str.length; i++) {
    let currentVal = roman[str[i]];
    let nextVal = roman[str[i + 1]];

    if (nextVal > currentVal) {
      tambah -= currentVal;
    } else {
      tambah += currentVal;
    }
  }
  return tambah;
}

console.log(myFunc("IV"));
