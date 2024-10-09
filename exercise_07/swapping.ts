function myFunc(input: any){
    const res: any = {}

    for (let key in input[0]){

        res[input[0][key]] = key  // input saja output [{name : "David" , age : 20}]) jika input[0] didapatkan object {name : "David" , age : 20}

    }
    return [res]

}
console.log(myFunc([{name : "David" , age : 20}]))