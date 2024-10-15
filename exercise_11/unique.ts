function unique(nums: number[]) {
  let uni: number = 0;
  for (let item in nums) {
    console.log(uni);
    uni ^= nums[item]; // gunakan biner untuk perbandingan
    console.log(nums[item]);
  }
  return uni;
}
console.log(unique([4, 1, 2, 1, 2]));
