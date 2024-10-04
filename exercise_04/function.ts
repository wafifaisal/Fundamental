//function declaration
function reverseStr(input : string){
    return input.split("").reverse().join("")
}
console.log(reverseStr("Hello World"))
//const letter: string = reverseStr("Hello World")

//function expression
const sum1 = function(a:number, b:number,...others:number[]){ // a dan b parameter
    //console.log(others) // others hanya dapat dipanggil didalam function
    const sumOther = others.reduce((a,b) => a+b) // menambahkan isi array selain a dan b
    console.log(sumOther)
    return a + b // return adalah ujungnya
}
console.log(sum1(10,5,6,6,7,8)) // 10 dan 5 adalah argumen

//function scoope
// const sum = function(a:number, b:number){
//     const n: number = 10 // n hanya dapat dipanggil didalam function tidak bisa diluar kalo dipanggil diluar kena error scoope
//     return a + b
// }


//Default Parameter
const sum2 = function(c:number, d:number = 2){ // b sudah memiliki nilai
    return c + d
}
console.log(sum2(10)) 

//Nested Function
function getMessage (firstName: string){ // function  global get message
    function sayHello(){ // function 2 say hello
        return "Hello " + firstName
    }
    function welcomeMessage (){ //function 2 welcome message
        return "Welcome to Purwadhika"
    }
    return sayHello() + " " + welcomeMessage() 
}
console.log(getMessage("Wafi"))

//Closure Function
function greeting (name: string){
    const defaultMsg: string ="Hello "
    return function(){
        return defaultMsg + name
    }
}
const greetingDavid = greeting("david")
console.log(greetingDavid())
console.log(greeting("david"))

function capitalize (str : string){
    let res: string = ""
    for (let i = 0 ; i < str.length;i++)
        if (i == 0 || str.charAt(i-1) == " "){
            res += str.charAt(i).toUpperCase()
        } else {
            res += str.charAt(i).toLowerCase()
    }
    return res
}
console.log(capitalize("david di sini"))


function checkoddeven(num : number){
    if (num % 2 == 0){
        return "Even"
    } else {
        return "Odd"
    }
}

//currying
function multiplier (factor: number){
    return function(num: number){
        return factor * num
    }
}
const mul3 = multiplier(3)
const mul5 = multiplier(5)

console.log(mul3(4)) // 3*4
console.log(mul3(5)) // 3*5
console.log(mul5(4)) // 5*4
console.log(mul5(5)) // 5*5

//recursive function
function countdown(fromnumber: number){
    console.log(fromnumber)
    let nextnumber: number = fromnumber - 1
    if(nextnumber>0){
        countdown(nextnumber)
    }
}
countdown(10)