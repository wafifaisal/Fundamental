class Employee{
    name = ""
    type = ""
    #hour = 0
    #bSallary = 0
    #otSallary = 0
    constructor(name:string,type:string,bSallary:number,otSallary:number){
        this.name = name
        this.type = type
        this.#bSallary = bSallary
        this.#otSallary = otSallary
    }
    setHour(n: number){
        this.#hour += n
    }
    getSallary(){
        if (this.#hour <= 6){
            return this.#hour * this.#bSallary
        } else {
            return this.#bSallary*6 + (this.#hour - 6) * this.#otSallary
        }
    }
}

class FullTimeEmployee extends Employee{
    constructor(name:string){
        super(name,"Full-Time",100000,75000)
    }
}

class PartTimeEmployee extends Employee{
    constructor(name:string){
        super(name,"Part-Time",50000,30000)
    }
}

const employee1 = new FullTimeEmployee("Kemal")
employee1.setHour(10)
console.log(employee1.getSallary())

const employee2 = new PartTimeEmployee("Tresno")
employee2.setHour(10)
console.log(employee2.getSallary())