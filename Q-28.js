// Write a Function to check if a character is uppercase or lower case.

function isUpperCase(char){
    if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
        return true;
    }
    return false;
}

function isLowerCase(char){
    if(char.charCodeAt(0)>=98 && char.charCodeAt(0)<=122){
        return true;
    }
    return false;
}
console.log(isUpperCase('X'));
console.log(isLowerCase('X'));