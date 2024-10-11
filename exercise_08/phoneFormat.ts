/*
    input = "123456789"
    output = "(123)-456-789"
*/
function phoneFormat(input:string){
    let arr:string[] = input.split("")
    arr.unshift("(")
    arr.splice(4,0,")-")
    arr.splice(8,0,"-")
    let newarr:string = arr.join("")
    console.log(newarr)
    return arr
        
    }
 
phoneFormat("123456789")

//Bahasan 
// function myfunc(str:string){
//     let res = "(xxx)-xxx-xxx"
//     for (let i = 0; i < str.length; i++){
//         res = res.replace("x",str.charAt(i))
//         console.log(res)
//     }
//     return res

// }
    
