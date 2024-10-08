const arr1 = [1,2,3]
const arr2 = [1,2,3] 
console.log(arr1 == arr2) // return false

const arr3 = [1,2,3]
const arr4 = arr3
console.log(arr3 == arr4) // return true

const null1 = null
const null2 = null
console.log(null1 == null2)// return true karena null merupakan object primitive

//Object dan array tidak dapat dibandingan tidak mengacu ke object yang sama walupun datanya sama persis antara arr 1 dan arr 2

const target = { a : 1 ,b : 2 }
const source = { b : 4 ,c : 5 }
const final = Object.assign(target,source) // {a:1,b:4,c:5}
//const final = Object.assign(source,target) // {b:2,c:5,a:1}
//console.log(target)//{ a : 1 ,b : 2 }
//console.log(source)//{ b: 2, c: 5, a: 1 }
//console.log(final) // { b: 2, c: 5, a: 1 }
//console.log(final == source) // true

Object.assign(target,{d:10}) //menambahkan variable d:10 pada target
//console.log(target) //{ a: 1, b: 4, c: 5, d: 10 }
//console.log(final)//{ a: 1, b: 4, c: 5, d: 10 }

const n = [1,2,3]
n[2] = 10
n[4] = 5
n[20] = 20

console.log(n) // [ 1, 2, 10, <1 empty item>, 5 ]
console.log(n.length) // 5

const num: any = {a:1,b:2,c:3}
num["d"] = 4
num["1"] = 4
console.log(num)
console.log(num["1"])

