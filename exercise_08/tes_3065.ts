// function minOperations(nums: number[], k: number) {
//     nums.sort((a, b) => a - b);
//     let count :number = 0
//     for (let i = 0 ; i < nums.length ; i++){
//         if (nums[i] < k){
//             count++
//         } else{
//             break
//         }
        
//     }
//     return count
// };
// minOperations([2,11,10,1,3],10)



function singleNumber(nums: number[]) {
    let count : number = 0
    for (let item of nums){
        count ^= item
    }
    
    return count
};

singleNumber([4,1,2,1,2])