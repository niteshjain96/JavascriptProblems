// Repeat A String
let str="abc";
function repeatString(str,n){
    let resultstr='';

    for(let i=0;i<n;i++){
        resultstr+=str;
    }
    return resultstr;
}

let result=repeatString(str,5);
console.log(result);