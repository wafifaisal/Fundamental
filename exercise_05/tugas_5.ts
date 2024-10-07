function tambahElemenUnik(arr: number[], elemenBaru: number): number[] {
    if (arr.includes(elemenBaru) == false) { //negasi (jika belum ada)
        arr.push(elemenBaru);
    }
    return arr;
}

let arr1 = [1, 2, 3, 4];
console.log(tambahElemenUnik(arr1, 4)); 
console.log(tambahElemenUnik(arr1, 7)); 