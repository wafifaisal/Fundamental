const str : string ="hello world"
let res : string =""

for(let i = 0 ; i < str.length; i++){
    if (i == 0 || str.charAt(i-1) == " "){
        res += str.charAt(i).toUpperCase()
    } else{
        res+= str.charAt(i).toLowerCase()
    }
}
console.log(res)
