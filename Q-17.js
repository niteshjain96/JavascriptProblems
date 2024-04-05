// Hash Tag Generator

// Method 1
function hashtag(str){
    let arrStr=str.split(" ");
    for(let i=0;i<arrStr.length;i++){
        arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1).toLowerCase();
        
    }
    arrStr[0]="#"+arrStr[0];
    return arrStr.join("");
    
}

// Method 2
function hashtag1(str) {
    let words = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    words[0] = '#' + words[0];
    return words.join('');
}

let str="my name is nitesh jain"
let result=hashtag1(str);
console.log(result);