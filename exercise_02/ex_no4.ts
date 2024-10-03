// Mencari faktorial dari nilai n
const n_f : number = 6
let pengali : number = 1
let deskripsi : string = ""
for (let i = n_f ; i > 0 ; i-- ){
    pengali *= i 
    if (i == 1){
        deskripsi += "1"
    } else {
        deskripsi += `${i} x `
    }

}
console.log(pengali)
console.log(`${deskripsi} = ${pengali}`)
