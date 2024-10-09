function getIntersection(obj1:object, obj2:object) {
    const result:object = {};
    for (const key in obj1) {
      if (obj2.hasOwnProperty(key) && obj1[key as keyof typeof obj1] === obj2[key as keyof typeof obj2]) {
        result[key as keyof typeof result] = obj1[key as keyof typeof obj1];
      }
    }
    return result;
  }

console.log(getIntersection({a:1,b:2,d:4},{a:1,c:3,d:4}))