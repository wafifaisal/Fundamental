let pesan: string = "Hello World"
let pesanUpper: string = pesan.toUpperCase()
//console.log(pesanUpper);
// console.log(pesan.toUpperCase())
// console.log(pesan.toLowerCase())
// console.log(pesan.replace("e","a"))
console.log(pesan.slice(1, 5)) // ngitung kata dari 0
//console.log(pesan.charAt(5))

//console.log(pesan.toLocaleUpperCase().replace("o","a")) // Ini yang salah
//console.log(pesan.toLocaleUpperCase().replace("O","A")) // Ini yang benar

//console.log(pesan.toLocaleUpperCase().replace("O","A").replace("O","A")) // Ini yang benar

console.log(pesan.concat(pesanUpper)); // Ini yang benar

console.log(pesan.repeat(5))

// Ketika parenthesis nya warna ungu dan kubus harus dikasi kurung. Jika balok dan berwarna biru tidak harus pake kurung

//cara untuk concat menggunakan TS
const firstname: string = "David" // "Hello David, Welcome to Purwadhika"
console.log(`Hello ${firstname}, Welcome to Purwadhika`)

// Cara lain
console.log("Hello "+ firstname +", Welcome to Purwadhika")
