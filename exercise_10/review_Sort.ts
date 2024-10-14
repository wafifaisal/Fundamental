function myFunc(arr: number[]) {
  arr.sort((a, b) => a - b);
  const res: number[] = [];
  for (let i = 0; i < arr.length / 2; i++) {
    // loop setengah array
    res.push(arr[arr.length - 1 - i]);
    console.log(res);
    res.push(arr[i]);
    console.log(res);
  }
  return res;
}

console.log(myFunc([1, 2, 3, 4, 5, 6]));
