function triangle(n: number) {

    let arr: (number | string)[] = [];
    let result: string = "";

    for (let i = 1; i <= n; i++) {
        arr.push(i);

        if (i % 3 === 0 && i % 5 === 0) {
            arr.splice(i - 1, 1, "FizzBuzz");
        } else if (i % 3 === 0) {
            arr.splice(i - 1, 1, "Fizz");
        } else if (i % 5 === 0) {
            arr.splice(i - 1, 1, "Buzz");
        }

        result = arr.join(",");
    }

    return result;
}

console.log(triangle(6));