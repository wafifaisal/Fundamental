function pascals(nums: number) {
  if (nums === 0) return [];
  if (nums === 1) return [[1]];

  let result: any = [];

  for (let i = 0; i <= nums; i++) {
    let arr: number[] = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr.push(1);
      } else {
        arr.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(arr);
  }
  return result;
}
console.log(pascals(5));
