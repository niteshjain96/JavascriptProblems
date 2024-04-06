// Compare are array are Equal

function arrayequal(arr1,arr2){
    if(arr1.length!== arr2.length){
        return false;
    }
    return arr1.every((curVal,index)=>curVal ===arr2[index])
}

function arrayequal2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

let result=arrayequal2([1,2,3],[1,2,3])
console.log(result);