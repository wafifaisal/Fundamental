//check whether a number is palindrome or not in Javascript
function isPalindrome(x: number): boolean {
    let rev:number = 0;
    let l_numb:number = 0;
    let temp = x
    while(x > 0){
        let l_numb = x % 10;
        console.log(l_numb) // 3 \n 2 \n 1
        x = Math.floor(x/10);
       // console.log(x) // 12 \n 1 \n 0
        rev = rev*10 + l_numb; 
        //console.log(rev) // 3 \n 32 \n 321
        //console.log(temp) // 123
    }
    if (temp == rev){
        return true
    }else{
        return false
    }
    }
isPalindrome(123)