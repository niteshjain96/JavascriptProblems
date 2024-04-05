// Reverse A string

// Method 1
function reverse1(str){
    // using for loop
    let revStr=''
    for(let i=str.length-1;i>=0;i--){
        revStr +=str[i];
    }
    return revStr;
}

// Method 2
function reverse2(str){
    let revstr=str.split('').reverse().join('')
    return revstr;
}

// Method 3
function reverse3(str){
    let revstr=Array.from(str).reverse().join('');
    return revstr;
}

// Method 4
function reverse4(str){
    return str.split('').reduce((pv,cv)=>cv+pv,"");
}
let str='hello';
let result=reverse4(str) // call function by any method
console.log(result);