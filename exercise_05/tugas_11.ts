function filternum(arr:any[]) {
    return arr.filter(item => {
        return item === null || (typeof item !== 'object' && typeof item !== 'function');
    });
}

let arr = [1, [], undefined, {}, "string", {}, []];
console.log(filternum(arr)); // Output: [1, undefined, "string"]