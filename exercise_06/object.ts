// interface Icar{ // bisa diturunkan kalo object pake interface
//     brand:string 
//     model: string
//     price? : number //tanda tanya untuk optional boleh ada boleh engga
// }

type Car = { // type string dan lain lain pake type
    brand: string ,
    model: string,
    price: number
}

const car: Car ={
    brand : "BMW",
    model: "M135i xDrive",
    price: 800000000
}

interface User{
    name: string
    hobby?: string
    address?:{
        street: string
        country: string
    }
    greeting(input: string): void // tidak mereturn
}

const user: User ={ // ada property and or ada method isinya
    name: "david", // ini property
    greeting(input: string){ // ini function dianggap method
        console.log("Hello" + input)
    }
}
// console.log(user.name) //"." (metode dot)
// console.log(user["name"]) // metode square bracket
//user.greeting("World")
user.hobby = "ngoding" //menambahkan ke user
console.log(user)
delete user.hobby
console.log(user)

console.log(Object.keys(user)) // melihat property 

user.address ={
    street: "Braga",
    country: "Indonesia"
}

//optional chaining
console.log(user.address?.street)
console.log(Object.keys(user)) // melihat property 
