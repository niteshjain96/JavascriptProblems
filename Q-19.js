// Check Triangle Whether Equilateral , isosceles or scalene

// Method 1
function triangle(a,b,c){
    if(a===b && b===c){
        return "Equilateral Triangle";
    }
    else if(a === b || b === c || c === a){
        return "Isosceles Triangle";
    }
    else{
        return "Scalene Triangle";
    }
}

// Method 2
function triangle2(a, b, c) {
    let result;
    switch (true) {
        case (a === b && b === c):
            result = "Equilateral Triangle";
            break;
        case (a === b || b === c || c === a):
            result = "Isosceles Triangle";
            break;
        default:
            result = "Scalene Triangle";
    }
    return result;
}

let result1=triangle(3,5,8);
let result2=triangle2(3,3,3);
let result3=triangle(6,5,6);
console.log(result1);
console.log(result2);
console.log(result3);