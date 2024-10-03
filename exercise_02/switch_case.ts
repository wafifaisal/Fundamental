const tanggal : Date = new Date("2025-01-01")
const day: number = tanggal.getDay()
console.log(day)

switch (day) {
    case 0:
        console.log("Minggu")
        break
    case 1:
        console.log("Senin")
        break
    case 2:
        console.log("Selasa")
        break
    case 3:
        console.log("Rabu")
        break
    case 4:
        console.log("Kamis")
        break
    case 5:
        console.log("Jumat")
        break
    case 6:
        console.log("Sabtu")
        break
    default:
        console.log("invalid day")
}