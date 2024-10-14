// function kidsWithCandies(candies: number[], extraCandies: number) {
//   let maxcandies = Math.max(...candies);
//   let res: boolean[] = [];
//   for (let i = 0; i < candies.length; i++) {
//     if (candies[i] + extraCandies >= maxcandies) {
//       res.push(true);
//     } else {
//       res.push(false);
//     }
//   }
//   return res;
// }

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

// s.trim Fungsi ini menghilangkan spasi kosong di awal dan akhir dari string s.
//.filter(Boolean) digunakan untuk menghapus elemen kosong dari array yang mungkin muncul akibat adanya spasi ganda atau lebih di dalam string.
function reverseWords(s: string): string {
  return s.trim().split(" ").filter(Boolean).reverse().join(" ");
}

console.log(reverseWords("  hello world  "));
