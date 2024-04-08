// Count vowels uppercase & lowercase both

function vowelcount(str){
    let vowels=['a','e','i','o','u'];

    let arr=str.split('');
    let count=0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}

function vowelcount1(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowelcount1("Hellllloooooo WOOOORLD"));