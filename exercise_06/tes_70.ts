function climbStairs(n: number): number {
    const satu:number = 1
    const dua:number = 1
    let step: number = 1
    for(let i = 3; i <= n; i++){

        step = (i-satu + i-dua)-1
    }
    return step

    }
console.log(climbStairs(4))
