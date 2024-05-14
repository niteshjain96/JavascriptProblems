// Deep Clone an Object

// method 1
const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
 

// method 2
const deepClone1 = (obj) => {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
  
    return clone;
  };