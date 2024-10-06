function triangle(n: number) {
    
    let arr: number[] = []
    let result: string = ""

    for (let i = 1; i <= n; i++){

        arr.push(i)
        result += arr.join(" ");

        if(i!== n) {
            result += '\n'
        }
    }
    return result
}
console.log(triangle(5))

