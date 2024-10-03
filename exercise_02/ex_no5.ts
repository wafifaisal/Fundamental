//Deret Fibonnaci
const n_fibo: number = 15
let count: number = 0
let n_1: number = 0
let n_2: number = 1
while (count < n_fibo){
    console.log(n_1)
    let bilangan : number = n_1 + n_2
    n_1 = n_2
    n_2 = bilangan
    count += 1
}
console.log(`Penjumlahan fibonnaci dari ${n_fibo} -> ${n_1}`)





