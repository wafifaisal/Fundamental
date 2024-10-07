function arr(a:number[],b:number[]){
    let res:number[] = []
    for(let i = 0 ; i < a.length ; i++){
        let newArr:number = a[i] + b[i]; //lebih simple dari menggunakan newArr looping isi array +5
        res.push(newArr)
    }
    return console.log(res)
}

arr([1,2,3,5],[3,2,1,5])