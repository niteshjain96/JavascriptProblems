// convert array to objects

const arr=[['a',1],['b',2],['c',3]]

// method 1

const obj={};
arr.forEach(([key, value]) => {
  obj[key] = value;
});
console.log(obj);

// methdo 2

const obj1=Object.fromEntries(arr);
console.log(obj1);