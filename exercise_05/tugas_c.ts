// input = "Pig Latin is Cool"
// output = "igPay atinlay siay oolcay"
function thailand(str:string){
    return str.split(" ").map((item)=> item.slice(1) + item[0] + "ay").join(" ")
    



} 
console.log(thailand("Pig Latin is Cool"))