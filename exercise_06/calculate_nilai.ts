class Student{
    name = ""
    email = ""
    dob = ""
    score = 0
    constructor(nama:string , surel:string, tanggal:string, nilai:number){
        this.name = nama
        this.email = surel
        this.dob = tanggal
        this.score = nilai
    }
    getAge(){
        
        return 0// cari codenya hasil umur
    }
}

const student1 = new Student("Andi","andi@gmail.com","2002-01-01",80)
const student2 = new Student("Budi","budi@gmail.com","2000-01-01",85)
const student3 = new Student("Caca","caca@gmail.com","1998-01-01",90)

const arrStudent = [student1,student2,student3]
console.log(arrStudent)
//console.log(arrStudent.sort((a,b) => a-b))

// type Nilai = { // type string dan lain lain pake type
//     Highest: number,
//     Lowest: number,
//     Average: number
// }

// const nilai: Nilai = { // ada property and or ada method isinya
//     Highest: Student.,
//     Lowest: student1,
//     Average: student1,
//     sort(input: number[]){ // ini function dianggap method
        
//     }
// }



