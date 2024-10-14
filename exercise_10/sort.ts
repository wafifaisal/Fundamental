/*
 input = [1,2,3,4,5,6]
 output = [6,1,5,2,4,3]

 input = [11,21,22,5,30,14]
 output = [30,5,22,11,21,14]
*/
function selectionSort(arr: number[]) {
  let arr1 = [...arr];
  console.log(arr1);
  let sortarr = arr1.sort((a, b) => b - a);
  console.log(sortarr);
  let newArr: number[] = [];
  let sort: boolean = true;
  for (let item of arr) {
    let temp: any = sort == true ? sortarr.shift() : sortarr.pop(); //sap sap
    console.log(temp);
    newArr.push(temp);
    console.log(newArr);
    sort = !sort;
  }
  return newArr;
}

console.log(selectionSort([11, 21, 22, 5, 30, 14]));
