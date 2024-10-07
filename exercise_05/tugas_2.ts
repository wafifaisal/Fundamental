// function concat(arr:string[]) {
//     if (arr.length === 0) {
//         return '';
//     } else if (arr.length === 1) {
//         return arr[0];
//     } else {
//         return arr.slice(0, -1).join(', ') + ', and ' + arr[arr.length - 1];
//     }
// }

// // Example usage
// const arr = ["apple", "banana", "cherry", "date"];
// console.log(concat(arr))


function concate(input:string[]){
    const str: string = input.pop()||""
    return input.join(", ")+", and "+ str
}
console.log(concate(["apple","banana","cherry","date"]))
