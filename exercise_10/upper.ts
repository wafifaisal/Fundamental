/*
    input = "Hello Purwadhika"
    output = [13,2]

    input = "B4ndung" //4 diabaikan
    output = [5,1]
*/

function upper(str: string) {
  let count1: number = 0;
  let count2: number = 0;
  let arr = str
    .trim()
    .split(" ")
    .filter(Boolean)
    .join("")
    .replace(/([0-9])/, "");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      count1++;
    } else if (arr[i] === arr[i].toLowerCase()) {
      count2++;
      console.log(count2);
    } else {
      break;
    }
  }
  return [count2, count1];
}

console.log(upper("B4ndung"));
console.log(upper("Hello Purwadhika"));
