// Write a Function to convert a string to snake_Case.

function snakecase(str){
    str=str.trim().split(' ');
    str=str.map((curElem)=>{
        return curElem.toLowerCase();
    })
    
    return str.join('_');
}

let str='hello nitesh jain'
let result=snakecase(str);
console.log(result);