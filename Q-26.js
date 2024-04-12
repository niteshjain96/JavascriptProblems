// Write a Function to convert a string to camelCase.

function camelCase(str){
    str=str.trim().split(' ');
    str=str.map((curElem,index)=>{
        if(index==0){
            return curElem.toLowerCase();
        }
        else{
            return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
        }
    })
    return str.join('');
}
let str='hello nitesh jain'
let result=camelCase(str);
console.log(result);