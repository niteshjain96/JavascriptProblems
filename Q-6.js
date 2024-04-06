// Sort an Array

// Method 1
function sorted(arr) {
    let newArr = [...arr]; // Create a copy of the original array
    // Bubble sort algorithm
    for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = 0; j < newArr.length - i - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }

    return newArr;
}



let arr=[34,63,65,11,22,100,53,34];
let result=sorted(arr);
console.log(result)