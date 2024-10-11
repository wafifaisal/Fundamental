class Product{
    name: string =""
    price : number = 0
    constructor(nama:string, harga:number){
        this.name = nama
        this.price = harga
    }
}
const product1 = new Product("Apple",20000)
const product2 = new Product("Banana",30000)
const product3 = new Product("Cherry",50000)

class Transaction{
    #total: number = 0 
    #product: object[] = []
    addToCart(product: Product,qty:number){
        this.#product.push({...product,qty,total:product.price*qty}) // ambil product1 product2 product3 + nambahin total masukin ke tabel
        this.#total += product.price * qty // nambahin barang ke product
    }
    show(){
        this.#product.push({total:this.#total})//tunjukan total dalam tabel
        console.table(this.#product)
        console.log(`Total: ${this.#total}`)
    }
    checkout(money:number){
        if (money< this.#total){
            //throw new Error("Uang anda tidak cukup")
            console.log("Uang anda tidak cukup")
        }else{
            console.log(`Cash : ${money}`)
            console.log(`Return : ${money - this.#total}`)
            console.log("~~~ Thank You ~~~")
        }

    }
}




const transaction1 = new Transaction()
transaction1.addToCart(product1,2)
transaction1.addToCart(product2,1)
transaction1.addToCart(product3,3)
//console.log(transaction1)
transaction1.show() // membuat table akan tetapi khusus tipe data object[] 
transaction1.checkout(250000)

