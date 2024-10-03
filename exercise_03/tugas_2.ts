let kata:string = "kasur"
let kata_reverse = kata.split('').reverse().join('');
if(kata === kata_reverse){
    console.log(`${kata_reverse} - > Palindrome`)

}else{
    console.log(`${kata_reverse} - > Bukan Palindrome`)
}