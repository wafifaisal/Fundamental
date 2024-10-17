const obj1 = { name: "andi", age: 25 };
const obj2 = {
  name: "andi",
  age: 25,
};
const arr1 = [1, 2, 3];
const json1 = JSON.stringify(obj1); // ubah ke bentuk string atau json (javascript object notation)
const json2 = JSON.stringify(obj2);

const json3 = JSON.stringify(arr1);

console.log(json1);
console.log(json1 === json2);
console.log(JSON.parse(json1)); // ubah ke sesuai tipe javascript
console.log(typeof json1);
console.log(JSON.parse(json3));
