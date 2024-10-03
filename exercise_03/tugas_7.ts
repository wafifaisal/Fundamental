const str :string = "The QuiCk BrOwN Fox"
let res : string =""
for(let i = 0 ; i < str.length; i++){ 
    if(str.charAt(i) == str.charAt(i).toLowerCase()){ 
        res += str.charAt(i).toUpperCase()     
    }else{
        res += str.charAt(i).toLowerCase()    
    }
}
console.log(res)