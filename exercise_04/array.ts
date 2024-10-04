//const arr = [1,2,3]
//const arr2 = ["A","B","C"]
//const arr3 = new Array ("A","B","C")

//string
 const arr : string[] = ["A","B","C"]
 const arr2 : string[] = new Array ("A","B","C")

//number
// const arr : number[] = [1,2,3]
// const arr : number[] = new Array (1,2,3)

//number & string
// const arr : (number | string)[] = ["A","B","C",1]
// const arr : (number | string)[] = new Array ("A","B","C",1)

console.log(arr)
console.log(arr[1]) // memunculkan isi dari array
//console.log(arr.) // banyak propertynya
console.log(arr.length) // panjang index

//menambahkan value di belakang
arr.push("D")
console.log(arr);
//menghapus value di belakang
arr.pop()
console.log(arr)


//menambahkan value di depan
arr.unshift("E")
console.log(arr)
//menghapus value di depan
arr.shift()
console.log(arr)

//menghapus index ke-n
arr.splice(1, 1) // (index berapa, sebanyak berapa)
console.log(arr);

//menambahkan index ke-n
arr.splice(1, 1, "Z") // (index berapa, sebanyak berapa, nilai yang mau ditambahkan)
arr.splice(1, 0, "Z") // (index berapa, tidak menghapus, nilai yang ditambahkan)
console.log(arr);

const numArr : number[] = [1,3,2,100,21]
numArr.sort((a,b) => a-b) //sorting dari kecil ke terbesar 
//numArr.sort((a,b) => b-a) //sorting dari besar ke kecil
//numArr.sort() //sorting dari kecil ke terbesar dapat digunakan untuk alphabet atau hanya melihat nomor paling depan mis: 21 dianggap 2
//numArr.sort().reverse // sorting besar ke kecil alphabet 
console.log(numArr)


//const oddNumber: number[] = numArr.filter((item) => item % 2 == 1) // mendapatkan bilangan ganjil pada array
const oddNumber: number[] = numArr.filter((item) => item % 2 == 1 && item > 2).sort((a,b) => b-a) // kombinasi
console.log(oddNumber)

console.log(oddNumber.find((item) => item == 3)) //mencari nilai di array
console.log(oddNumber.findIndex((item) => item == 3)) //mencari nilai di array untuk output index
console.log(oddNumber.includes(3)) //mencari nilai di array untuk output index

const str: string = "Purwadhika Bandung"
// console.log(str.split(" ")) // mengubah jadi array
// console.log(str.split(" ").toString()) // mengubah jadi array lalu jadi string tapi masih ada komanya atau pemisah
// console.log(str.split(" ").join("-")) // mengubah jadi array lalu jadi string pemisahnya bisa di custom

console.log(str.split("").reverse().join("")) // kata2 kebalikan

const newArr: number [] = [10,20,30,40,50]
const newArr2: number[] = newArr.map((item) => item += 5) //lebih simple dari menggunakan newArr looping isi array +5
console.log(newArr2);

const newArr3: number[] = [] // lebih ribet
newArr.forEach((item) =>{ // looping untuk menggunakan newArr isi array +5
    newArr3.push(item + 5)
})
console.log(newArr3)


// newArr.forEach((item, idx) => { // looping untuk keluarkan array menjadi console.log sebanyak index
//     console.log(item, idx); 
// })

newArr.map((item, idx) => { // looping untuk keluarkan array menjadi console.log sebanyak index sama kek forEach tapi bisa return array baru
    console.log(item, idx); 
})


for(let item of newArr){ // looping untuk mengetahui semua isi array
    console.log(item);
}