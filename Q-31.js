// Truncate A String

let str='my name is Nitesh Jain';

function truncateString(str,n){
    let resultstr='';
    for(let i=0;i<n;i++){
        resultstr += str.charAt(i);
    }
    if(str.length>n){
        resultstr+= "..";
    }
    return resultstr;
}
let result=truncateString(str,21);
console.log(result);