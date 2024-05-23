// function mul(x){
//     return function(y){
//         return function(z){
//             return x*y*z;
//         }
//     }
// }

// console.log(mul(10)(20)(30))

function sort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                // swap
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
let arr=[20,10,74,46,18];
console.log(sort(arr));