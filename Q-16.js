// Longest Word in a String

// Method 1
function longest1(str)
{
    if(str.trim().length===0){
        return false;
    }
    let strArr=str.split(" ");
    let resultarr='';
    for(let i=0;i<strArr.length;i++){
        let word = strArr[i].replace(/[^\w\s]/g, ''); // remove non-alphanumeric characters
        if(word.length > resultarr.length){
            resultarr = word;
        }
    }
    return resultarr;
}

function longest2(str){
        return str.split(' ').reduce((longest, current) => {
          return current.length > longest.length ? current : longest;
        }, '');
      
}

function longest3(str) {
    if (str.trim().length === 0) {
        return false;
    }

    let longest = '';
    let currentWord = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && str[i] !== ',') {
            currentWord += str[i];
        } else {
            if (currentWord.length > longest.length) {
                longest = currentWord;
            }
            currentWord = '';
        }
    }
    // Check the last word if it's longer
    if (currentWord.length > longest.length) {
        longest = currentWord;
    }

    return longest;
}
let str="The input string may contain alphabetic characters digits space and punctuation";
let result=longest3(str);
console.log(result);
