/*
n = 5
    *
   **
  ***
 ****
*****
*/

const n_pira: number = 10
for (let i = 1; i <= n_pira  ; i++) {
    console.log(" ".repeat(n_pira - i) + "*".repeat(i) + "*".repeat(i))
}
