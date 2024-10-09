function lengthOfLastWord(s: string) {

    if(s.length == 0){
        return 0
    }else{
        const kata = s.trim().split(" ")
        const panjang_kata_terakhir = kata[kata.length-1].length
        return panjang_kata_terakhir
    }
    
    
};
console.log(lengthOfLastWord("Hello World"))