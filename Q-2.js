// Palindrome Check

// Method 1
function palindome1(str){
    const reverseStr=str.split('').reverse().join('');
    return reverseStr===str;
}

// Method 2
function palindome2(str){
    const reverseStr=Array.from(str).reverse().join('');
    return reverseStr===str;
}

// Method 3
function palindrome3(str){
    const reverseStr=str.split('').reduce((pv,cv)=>cv+pv,"")
    return reverseStr===str;
}

// Method 4
function palindrome4(str){
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;

}

let str='naman';
let result=palindrome4(str);
if(result){
    console.log('String is Palindrome');
}
else{
    console.log('String is Not a Palindrome');
}