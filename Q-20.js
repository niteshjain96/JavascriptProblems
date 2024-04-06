// find maximum number in an array

function max(arr){
    let newarr=[...arr];
    let max=arr[0];
    for(let i=1;i<newarr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

function max2(arr){
    let newarr=[...arr]
    

    let max=newarr.reduce((pv,cv)=>(cv>pv)?cv:pv);
    return max;
}



let arr=[12,53,-75,23,7,12]

let result=max2(arr);
console.log(result);