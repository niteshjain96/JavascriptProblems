// Merge Two Sorted Arrays

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Iterate over both arrays until one of them is fully processed
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            // If element from arr1 is smaller or equal, add it to merged array
            mergedArray.push(arr1[i]);
            i++;
        } else {
            // If element from arr2 is smaller, add it to merged array
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}
let arr1=[1,3,5,9,11,23,50]
let arr2=[2,4,9,12,36]
let result=mergeArrays(arr1,arr2)
console.log(result)