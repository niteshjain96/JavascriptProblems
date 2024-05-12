// Fibonacci

function fibonacci(n){
    let a=0;
    let b=1;
    while(n>=1){
        let c=a+b;
        console.log(a);
        a=b;
        b=c;
        n--;
    }
}

fibonacci(10);
