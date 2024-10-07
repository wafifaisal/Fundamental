function triangle(n: number) {

    let arr: (number|string)[] = []
    let result: string = ""

    for (let i = 1; i <= n; i++){
        arr.push(i)
        result = arr.join(",");
        console.log(arr);
        if ( i % 3 == 0){
            arr.pop()
            arr.push("Fizz")
        } else if (i % 5 == 0){
            arr.pop()
            arr.push("Buzz")
        } if (i % 5 == 0 && i % 3 == 0){
            arr.pop()
            arr.push("FizzBuzz")
        }
    }
    return result
}
console.log(triangle(7))