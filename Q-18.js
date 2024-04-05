// Count Occurence of Characters

// Method 1
function occurrence(str1, str2) {
    let count = 0;
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();
    for (let i = 0; i < lowerStr1.length; i++) {
        if (lowerStr1.charCodeAt(i) === lowerStr2.charCodeAt(0)) {
            count++;
        }
    }
    return count;
}

// Method 2
function occurrence2(str1, str2) {
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr1.length; i++) {
        // Check if the current character equals the target character
        if (lowerStr1[i] === lowerStr2) {
            // If yes, increment the count
            count++;
        }
    }

    return count;
}

let str="my name is niteshbnbnguiijcdvnffjerdfcg IIhujdn vfrh3fchybe fduvfjherb  jain"
let result=occurrence2(str,"i");
console.log(result);