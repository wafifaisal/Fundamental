function Climbing(n: number) {
  let count: number = 0;
  let n_1: number = 0;
  let n_2: number = 1;
  while (count < n) {
    console.log(n_1);
    let bilangan: number = n_1 + n_2;
    n_1 = n_2;
    n_2 = bilangan;
    count += 1;
  }
  return n_2;
}
console.log(Climbing(2));
