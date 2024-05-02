// Number Range Generator

function numberRange(a,b){
    let arr=[];
    for(let i=a;i<=b;i++){
        arr.push(i);
    }
    return arr;
}

let result=numberRange(-2,2);
console.log(result);