/*
    input: "Purwadhika"
    output: 4

    input: Bandung
    output:2
*/
// function vowel(input:string){
    
//     let count:number = 0 
    
//     for(let i = 0; i < input.length; i++){ // looping untuk mengetahui semua isi array
//         if( input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] =="u"){
//             count++
//     }
    
//     }
//     return console.log(count)
// }
// vowel("purwadhika")



function countvowel(str:string){
    const vowel = ["a","i","u","e","o"]
    let res : number = 0
    for (let i=0 ; i < str.length ; i++){
        if (vowel.includes(str.charAt(i))){
            res++
        }
    }return res
}
console.log(countvowel("Purwadhika"))