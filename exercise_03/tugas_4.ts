const int:number = 123456789
const numStr:string = int.toString()
let res:string = ""
let hitung:number = 0

for(let i = numStr.length - 1; i>= 0 ; i--){
    if(hitung % 3 == 0 && hitung > 0){
        res = "." + res
    }
    //res += numStr.charAt(i)
    res = numStr.charAt(i) + res
    hitung++
}
console.log(res)

//CARA LAIN :
//console.log(`Rp. ${int.toLocaleString()},00`);
//console.log(int.toLocaleString("id-ID",{style:'currency',currency:'iDR'}));

