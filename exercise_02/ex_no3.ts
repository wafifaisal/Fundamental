const n_ke : number = 5
let penambah : number = 0
let desc : string = ""
for (let i = 1 ; i <= n_ke ; i++ ){
    penambah += i 
    if(i == 1){
        desc += "1"
    } else {
        desc += ` + ${i}`
    }
}
console.log(penambah)
console.log(`${desc} = ${penambah}`)