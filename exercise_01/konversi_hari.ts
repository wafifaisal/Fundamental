const hari: number = 600
const Tahun: number = Math.floor(hari / 365)
const sisa_hari: number = Math.floor(hari % 365)
const b_b :number =  Math.floor(sisa_hari / 30)
const b_h :number =  Math.floor(sisa_hari % 30)


console.log(Tahun,"Year",b_b ,"month", b_h,"days")

//console.log(Math.ceil(5.01))//pembulatan keatas
//console.log(Math.round(5.01))//pembulatan matematika
