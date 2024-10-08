// //Template object (Public)
// class User{
//     firstname = ""
//     lastname = ""
//     constructor(first:string,last:string = ""){ //tambahkan ="" untuk opsional
//         this.firstname = first
//         this.lastname = last

//     }

//     greet(){
//         console.log(`Hello ${this.firstname}`)

//     }
// }
// const user1 = new User("frengky", "sihombing")
// const user2 = new User("jhon", "doe")
// const user3 = new User("jane", "dine")

// console.log(user1)// User { firstname: 'frengky', lastname: 'sihombing' }
// console.log(user2)
// console.log(user3)

// user1.greet() // Hello frengky
// user2.greet()
// user3.greet()


// console.log(user1.firstname) // frengky
// console.log(user2.firstname)
// console.log(user3.firstname)

//Template object (Private) artinya gaakan ngeprint yang pake pager
// class User{
//     firstname = ""
//     #lastname = "" //privat
//     constructor(first:string,last:string){ //tambahkan ="" untuk opsional
//         this.firstname = first,
//         this.#lastname = last, //privat

//     }

//     greet(){
//         console.log(`Hello ${this.firstname}`)
//     }
//     getlastname () {
//         return this.#lastname 
//     }
// }
// const user1 = new User("frengky", "sihombing")
// const user2 = new User("jhon", "doe")
// const user3 = new User("jane", "dine")

// console.log(user1)// User { firstname: 'frengky' }
// console.log(user2)
// console.log(user3)

// console.log(user1.getlastname)// User { firstname: 'frengky', lastname: 'sihombing' }
// console.log(user2.getlastname)
// console.log(user3.getlastname)


//Template object (Static)
class User{ // class huruf awal pake kapital User, Nama dll
    firstname = ""
    lastname = ""
    static word = "Hello World"
    constructor(first:string,last:string = ""){ //tambahkan ="" untuk opsional
        this.firstname = first
        this.lastname = last

    }

    greet(){
        console.log(`Hello ${this.firstname}`)

    }
}
const user1 = new User("frengky", "sihombing")
const user2 = new User("jhon", "doe")
const user3 = new User("jane", "dine")

console.log(User.word)// User { firstname: 'frengky', lastname: 'sihombing' }




