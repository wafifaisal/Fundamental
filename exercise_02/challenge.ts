/*
n = 5
*
**
***
****
*****
*/

// const n_bintang : number = 5
// let penambah : number = 0
// let desc : string = "*"
// while (penambah < n_bintang){
//     penambah += 1
//     console.log(desc)
//     if(penambah == 1){
//         desc += "*"
//     } else {
//         desc += "*"
//     }
// }

const n: number = 5
for (let i = 1; i <= n ; i++) {
    console.log("*".repeat(i))
}