// Find the largest Number

// Method 1
function largest1(arr){
    let largest=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}

// Method 2
function largest2(arr){
    let largest=arr.reduce((pv,cv)=>(cv>pv)?cv:pv);
    return largest;
    
}


let arr=[34,97,4651,99,1000,654,-76543];
let result=largest2(arr);
console.log(result);