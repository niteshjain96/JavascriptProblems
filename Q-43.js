// // convert object to array

const obj={
    name:1,
    age:2,
    place:3
}

const arr=Object.keys(obj);
const arr2=Object.values(obj);
const arr3=Object.entries(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.place);

console.log(arr);
console.log(arr2);
console.log(arr3);

for(let key in obj){
    console.log(obj[key])
}


