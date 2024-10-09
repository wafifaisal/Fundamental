function compare(obj1:object,obj2:object){
    const key1 = Object.keys(obj1)
    const key2 = Object.keys(obj2)
    if(key1.length !== key2.length){
        return false
    }
    for (let key1 of key2){
        if (obj1[key1 as keyof typeof obj1] !== obj2[key1 as keyof typeof obj2]) {
            return false
        }
    }
    return true

    
}
console.log(compare({a: 1},{a:1}))




