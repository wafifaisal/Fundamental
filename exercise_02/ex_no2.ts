//Menentukan bilangan ganjil dan genap
const n2: number = 7
let pembagi : number = 0;
for(let i=1; i <= n2; i++){
    if(n2 % i == 0){
        pembagi++
}
}
    if(pembagi == 2){
      console.log(`${n2} is a prime number`)
    }else{
      console.log(`${n2} is not a prime number`)
    }