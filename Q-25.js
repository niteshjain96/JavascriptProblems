// Calculate the sum of squares of all elements in an array.

function sumofsquares(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i]*arr[i];
    }
    return sum;
}

function sumofsquares1(arr){
    let sum=arr.reduce((pv,cv)=>pv+cv*cv,0);
    return sum;
}
let arr=[1,2,3]
let result=sumofsquares1(arr);
console.log(result);