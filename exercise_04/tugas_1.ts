function triangle(n: number) {
    let result: string = "";
    let num = 1;

    for (let i = 1; i <= n; i++) {
        let row: string[] = [];
        
        for (let j = 0; j < i; j++) {

            row.push(num < 10 ? "0" + num : num.toString());
            num++;
        }

        result += row.join(" ");
        
        if (i !== n) {
            result += '\n';
        }
    }

    return result;
}

console.log(triangle(5));