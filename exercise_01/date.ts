//Tanggal Hari ini Jamnya menggunakan UTC
let now: Date = new Date()
console.log(now);

// Tanggal javascript membuat built in tanggal
let jan01_1970: Date = new Date(0)
console.log(jan01_1970)

//Spesifik Tanggal dengan format YYYY-MM-DD
let date: Date = new Date("2025-01-01")
console.log(date);

//Dapat memecah tanggal
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getDay())

//Dapat memecah jam
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getMilliseconds())
