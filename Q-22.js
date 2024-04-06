// Calculate average of array

function average(arr){
    let newarr=[...arr];
    let sum=0;
    for(let i=0;i<newarr.length;i++){
        sum +=arr[i];
    }
    return sum/newarr.length;
}

function average2(arr){
    let newarr=[...arr];
    let result=newarr.reduce((pv,cv)=>pv+cv);
    return result/newarr.length;
}

let arr=[33,64,25,8,46,2,-86,7,-1,56];
let result=average2(arr);
console.log(result);