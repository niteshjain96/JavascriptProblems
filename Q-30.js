// Repeat A String
let str="abc";


function repeatString(str,n){
    let result='';
    for(let i=0;i<n;i++){
        result += str;
    }
    return result;
}
let result=repeatString(str,5);
console.log(result);