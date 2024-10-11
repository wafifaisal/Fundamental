function isPalindrome(s: string) {
    
    let kata_reverse = s.split('').reverse().join('');
    if(s === kata_reverse){
        return true

    }else{
    return false
    }
};
isPalindrome("kasur")