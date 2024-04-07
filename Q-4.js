// FIZZBUZZ
function fizzbuzz1(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " is FizzBuzz");
        } else if (i % 3 === 0) {
            console.log(i + " is Fizz");
        } else if (i % 5 === 0) {
            console.log(i+ " is Buzz");
        } 
    }
}

function fizzbuzz2(n) {
    for (let i = 1; i <= n; i++) {
        const fizz = i % 3 === 0;
        const buzz = i % 5 === 0;
        console.log((fizz ? (buzz ? "FizzBuzz" : "Fizz") : (buzz ? "Buzz" : i)) + " is " + (fizz || buzz ? "" : "not ") + "FizzBuzz");
    }
}

let n = 100;
fizzbuzz1(n);
