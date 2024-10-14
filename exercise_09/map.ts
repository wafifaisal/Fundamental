const myMap = new Map()
myMap.set("David","001")
myMap.set("Buchanan","002")
myMap.set(true,"003") // tidak seperti objek myMap dapat digunakan untuk semua tipe data untuk keynya

console.log(myMap)
console.log(myMap.get("David"))

console.log(myMap.keys())

console.log(myMap.size) // seperti .length kalo di array