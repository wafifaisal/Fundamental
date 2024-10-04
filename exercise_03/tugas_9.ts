let int1 = 42;
let int2 = 27;
let int3 = 18;

// if (int1 <= int2 && int1 <= int3) {
//     if (int2 <= int3) {
//         console.log(int1, int2, int3);
//     } else {
//         console.log(int1, int3, int2);
//     }
// } else if (int2 <= int1 && int2 <= int3) {
//     if (int1 <= int3) {
//         console.log(int2, int1, int3);
//     } else {
//         console.log(int2, int3, int1);
//     }
// } else {
//     if (int1 <= int2) {
//         console.log(int3, int1, int2);
//     } else {
//         console.log(int3, int2, int1);
//     }
// }

if (int1>int2){
    const n: number = int1
    int1 = int2
    int2 = n
}
if (int2 > int3) {
    const n: number = int2
    int2 = int3
    int3 = n
}
if (int1 > int2) {
    const n : number = int1
    int1 = int2
    int2 = n
}