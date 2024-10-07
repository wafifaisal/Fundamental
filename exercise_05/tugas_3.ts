// let arr: number[] =[5, 3, 1 ,7,2, 6]
// function sum1(n:number []){
    
//    return n.sort((a,b) => a-b)[1]

// }
// console.log(sum1(arr));


function secSmall(arr:number[]){
    arr.sort((a,b)=> a-b)
    const newArr = arr.filter((item) => arr[1])
    return newArr[1]
}
console.log(secSmall([5,2,3,5,1,2,6,8,9,10]))

