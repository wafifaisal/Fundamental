function unique(nums: number[]) {
  let uni: number = 0;
  for (let item in nums) {
    uni ^= nums[item];
  }
  return uni;
}

console.log(unique([4, 1, 2, 1, 2]));
