
const person = {
    name: "David",
    age: 25,
    hobby: "Coding"
}

//Object destructuring
const {name,age,hobby} = person 

console.log(name)
console.log(age)
console.log(hobby)

//array destructuring
const arr = [1,2,3]
const [a,b,c] = arr

console.log(a)
console.log(b)
console.log(c)


const user ={
    fname: "frengky",
    lname: "sihombing",
    greet(){
        console.log(`Hello ${this.fname}`) // this disini mengacu ke object user
    }
}
user.greet()

// Untuk liat object built in method 
console.log(Object.entries(user)) // melihat key dan property
//Object.freeze(user) //gabisa edit object yang udah di freeze
//user.fname = "Andi"// return error
console.log(Object.isFrozen(user)) //cek di froze ga
console.log(user.hasOwnProperty("fname")) // ada property fname ga di user
console.log(Object.values(user)) //melihat value property dalam bentuk array ["frengky","sihombing",[function: greet]]
