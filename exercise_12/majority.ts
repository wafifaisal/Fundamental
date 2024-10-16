// function majority(n: number[]) {
//   let count: number = 0;
//   for (let i = 0; i < n.length; i++) {
//     for (let j = 0; j < n.length; j++) {
//       if (n[i] === n[j]) {
//         count++;
//         console.log(n[i]);
//       }
//     }
//     if (count > n.length / 2) {
//       console.log(n.length / 2);
//       return n[i];
//     }
//   }
// }
// console.log(majority([-1, 1, -1]));

function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate = nums[0];

  for (let key of nums) {
    if (count === 0) {
      candidate = key;
    }
    count += key === candidate ? 1 : -1;
  }

  let majorityNumber = 0;
  const majorityCount = Math.floor(nums.length / 2);

  for (let num of nums) {
    if (num === candidate) {
      majorityNumber++;
    }
  }
  return majorityNumber > majorityCount ? candidate : -1;
}
console.log(majorityElement([1, 2, 1, 1, 1]));
