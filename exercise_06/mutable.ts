//let name: string = "Andi"
//let newName: string = name // name masih Andi
//name = "Budi" // berubah ketika disini name = "Budi"
//console.log(name);

// mutable dapat diubah walaupun pake const untuk non primitive (array dan object)
const arr:number[] = [1,2,3]
const newArr:number[] = [...arr] // copy value number (spread operator)


arr.push(4)

// console.log(arr) // output [1,2,3,4]
// console.log(newArr) // output menjadi [1,2,3,4]

const person = {
    name: "Andi",
    age: 25
}

// const newPerson = {...person, hobby: "coding"} //copy object beserta property nya baru ditambahkn hobby
// newPerson.name = "Budi"
// console.log(person)
// console.log(newPerson)

//looping object
for (let key in person){
    console.log(key) // dapetin key nya name, age
    console.log(person[key as keyof typeof person]) // dapetin valuenya "Andi", 25
}