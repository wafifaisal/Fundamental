// function myFunc(s: string, t: string) {
//   s.toLowerCase();
//   t.toLowerCase();
//   for (let i = 0; i < t.length; i++) {
//     if (s.includes(t.charAt(i))) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(myFunc("anagram", "nagaram"));

function myFunc(s: string, t: string) {
  const anagram = (str: string) => str.toLowerCase().split("").sort().join("");

  return anagram(s) === anagram(t);
}

console.log(myFunc("anagram", "nagaram"));
