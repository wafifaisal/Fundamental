const tanggal1: Date = new Date("2022-01-20")
const tanggal2: Date = new Date("2022-01-22")

let t1 = tanggal1.getTime()

let t2 = tanggal2.getTime()

let selisih_milidetik: number = Math.abs(t2 - t1);
let selisih_hari: number = selisih_milidetik / (24*60*60*1000);


console.log("Total Selisih Hari:", selisih_hari);


