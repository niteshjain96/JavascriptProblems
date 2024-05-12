// Anagram

function anagram(str1,str2){
    if(str1.length!=str2.length){
        return false;
    }
    let arr1=Array.from(str1).sort().join();
    let arr2=Array.from(str2).sort().join();
    return arr1===arr2;
}
let x=anagram('silent','listen');
if(x){
    console.log('anagram');
}