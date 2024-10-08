class Product{
    productName = ""
    productPrice = 0
    constructor(name:string, price:number){
        this.productName = name
        this.productPrice = price
    }
}

class Book extends Product{
    //productName = "Buku" //dapat diturunkan dari product menggunakan extend
    //productPrice = 100000
    title = ""
    author = ""
    constructor(title:string, author: string, price: number){
        super("Buku",price) //harus ada pada child constructor
        this.title = title
        this.author = author
    }
}
const book1 = new Book("Harry Potter","JK. Rowling",150000)
console.log(book1) // print hasil inheritance
console.log(book1 instanceof Book) // true
console.log(book1 instanceof Product) // true
