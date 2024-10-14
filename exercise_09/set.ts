const fruits: string[] = ["banana","apple","jackfruit","apple"]
const newFruits = new Set(fruits)
console.log(newFruits)

newFruits.add("melon")
newFruits.delete("jackfruit")
//newFruits.clear() //kosongkan semua array
//console.log(newFruits.entries()) // output : [banana, banana], [apple,apple],[melon,melon]
//console.log(newFruits.values())
// newFruits.forEach((item) => {
//     console.log(item)
// })
// console.log(newFruits)