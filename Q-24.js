// Function which takes a number as input and return sum of its digits

function sumofdigits(n){
    let sum=0;
    while(n!=0){
        let rem=n%10;
        sum += rem;
        n=Math.floor(n/10);
    }
    return sum;
}

function sumofdigits1(n) {
    return Array.from(String(n), Number).reduce((acc, digit) => acc + digit, 0);
}

let result=sumofdigits1(345678);
console.log(result);