function singleNumber(nums: number[]) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.pop();
      }
    }
  }
  return nums;
}
console.log(singleNumber([1, 1, 2]));
