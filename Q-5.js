// Remove Duplicates

function removeduplicates(arr){
    let newArr=[...arr];
    let result=Array.from(new Set(newArr))
    return result;
}

function removeduplicates2(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let arr=[12,64,26,24,12,76,35,26,64,24,74,83,12];
let result=removeduplicates2(arr);
console.log(result);