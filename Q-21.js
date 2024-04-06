// Factorial Finder

function factorial(n){
    if(n==0){
        return 1;
    }
    let result=n*factorial(n-1);
    return result;
}

function factorial2(n){
    return n==0 ? 1 : n*factorial2(n-1);
}

function factorial3(n){
    let result=1;
    for(let i=2;i<=n;i++){
        result *=i;
    }
    return result;
}

let n=10;
let result=factorial3(n);
console.log(result);