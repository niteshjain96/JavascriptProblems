// Partion Array into odd and even numbers

function partitionOddEven(array) {
    const oddNumbers = [];
    const evenNumbers = [];

    for (let num of array) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num);
        }
    }

    return [oddNumbers, evenNumbers];
}

function partitionOddEven1(arr){
    let odd=arr.filter((a)=>a%2==1);
    let even=arr.filter((a)=>a%2==0);
    return [odd,even];
}
// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [oddNumbers, evenNumbers] = partitionOddEven(inputArray);
console.log("Odd numbers:", oddNumbers);
console.log("Even numbers:", evenNumbers);
