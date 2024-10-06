function oddNumber(n:number){
    let arr: number[] = []
    let result: number[] = [];


    for (let i = 1; i <= n; i++){
        arr.push(i)
        result = arr.filter((item) => item % 2 == 0)
    }
    console.log(arr,"->",result)
    return result
}
oddNumber(5)
