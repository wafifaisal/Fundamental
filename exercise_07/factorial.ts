//factorial recursive
function factorial(num:number):number{
    return num == 0? 1: num * factorial(num - 1)
    
}
//const factorial2 = (num: number):number => num ==0? 1:num*factorial2(num-1)
console.log(factorial(6))


