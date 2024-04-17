// Write a Function to check if a given string starts with a specific substring.

function specific(str,h){
    let firstletter= str.charCodeAt(0);
    let letter=h.charCodeAt(0);
    if(firstletter===letter){
        return true;
    }
    else{
        return false;
    }
}

let result=specific('hello','H');
if(result==true){
    console.log('Specific');
}
else{
    console.log('Not Specific')
}