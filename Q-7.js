// Merge Two Sorted Arrays

function mergeArrays(arr1, arr2) {
    let merged = [];
    let i = 0,
        j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    return merged.concat(arr1.slice(i), arr2.slice(j));
}
let arr1=[1,3,5,9,11,23,50]
let arr2=[2,4,9,12,36]
let result=mergeArrays(arr1,arr2)
console.log(result)