function sum1 (...others:number[]){ // a dan b parameter
    others.sort((a,b) => a-b)
    console.log(others) // others hanya dapat dipanggil didalam function
    const low: number = others[0]
    others.sort((a,b) => b-a)
    let highest: number = others[0]
    let avg: number = others.reduce((a,b)=> a+b)/others.length


    return console.log(`lowest : ${low},`,`highest : ${highest},`,`average : ${avg}`)
}

sum1(12,5,23,18,4,45,32) 


function minMax(arr:number[]){
    const lowest: number = Math.min(...arr)
    const highest: number = Math.max(...arr)
    const average: number = arr.reduce((a, b) => a+b)/ arr.length
    return{
        lowest:lowest,
        highest:highest,
        average: average
    }
}
console.log((minMax([12,5,23,18,4,45,32])))