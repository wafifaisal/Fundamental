function containsNearbyDuplicate(nums: number[], k: number) {
    let count : number = 0
    for(let item of nums){ // looping untuk mengetahui semua isi array
        //console.log(item);
        if (item == k){
            count ++
            console.log(count)
        }
    }
        if (k == 1){
            return console.log("true")
        }
        if (count > 1){
            return console.log("false")
            //return false
        }

        else {
            return console.log("true")
        }

    
    
};
containsNearbyDuplicate([1,2,3,1,2,3],2)