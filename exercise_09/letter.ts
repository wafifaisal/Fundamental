/*
    a = 1
    b = 2
    c = 3
    ...
    z = 26
    input = "Abcd"
    output = 10 => 1+2+3+4
*/

function countLetter(letter: string) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let res = letter.toLowerCase();
  let count: number = 0;

  for (let i = 0; i < alphabet.length; i++) {
    let numsnumb = i + 1;
    for (let j = 0; j < res.length; j++) {
      if (alphabet[i] == res[j]) {
        count += numsnumb;
      }
    }
  }
  return count;
}

console.log(countLetter("Bandung"));

//Bahasan
//function myFunc(str:string){
//const alpha: string[] = "abcdefghijklmnopqrstuvwxyz".split("")
//console.log(alpha.indexOf("z"))
//return str.split("").map(item => alpha.indexOf(item.toLowerCase())).reduce((a,b) => a+b)
//}

// console.log(myFunc("Bandung"))
