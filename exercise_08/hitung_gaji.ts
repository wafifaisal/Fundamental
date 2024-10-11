class Employee{
    Tipe = ""
    total_jam = 0
    constructor(pegawai:string,jam:number ){
        this.Tipe = pegawai
        this.total_jam = jam 

    }
    jamkerja(hours:number) {
        this.total_jam += hours
        

    }

}

class FullTimeEmployee extends Employee{
    constructor(pegawai:string,jam:number){
        super(pegawai,jam)
    }
    GajiFullTime() {
        let gaji : number = 0
        const gaji_fulltime:number = 100000
        const gaji_berkurang:number = 75000
        let jam_lembur : number = this.total_jam - 6
        if (this.total_jam > 6){
            gaji = (gaji_fulltime * 6) + (gaji_berkurang * jam_lembur)  
        }else{
            gaji = gaji_fulltime * this.total_jam 
        }
        return gaji
    }
}

class PartTimeEmployee extends Employee{
    constructor(pegawai:string,jam:number){
        super(pegawai,jam)
    }
    GajiPartTime() {
        let gaji : number = 0
        const gaji_part:number = 50000
        const gaji_berkurang:number = 30000
        let jam_lembur : number = this.total_jam - 6
        if (this.total_jam > 6){
            gaji = gaji = (gaji_part * 6) + (gaji_berkurang * jam_lembur) 
        }else{
            gaji = gaji_part * this.total_jam 
        }
        return gaji
    }
}

const fulltimeEmp = new FullTimeEmployee("Pekerja Full-Time", 8);
console.log(`Gaji Total untuk ${fulltimeEmp.Tipe}: IDR ${fulltimeEmp.GajiFullTime()}`);

const parttimeEmp = new PartTimeEmployee("Pekerja Part-Time", 8);
console.log(`Gaji Total untuk ${parttimeEmp.Tipe}: IDR ${parttimeEmp.GajiPartTime()}`);