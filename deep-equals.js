function isEqual(a, b) {
    // your code here
    if((typeof a === 'number' && typeof b === 'number') || 
      (typeof a === 'string' && typeof b === 'string')) {
      return a === b;
    }
  
    if(Array.isArray(a) && Array.isArray(b)) {
      if(a.length !== b.length) return false;
  
      for(let index = 0; index < a.length; index++) {
        if(!isEqual(a[index], b[index])) {
          return false;
        }
      }
      return true;
    }
  
    if(typeof a === 'object' && typeof b === 'object') {
      if(Object.keys(a).length !== Object.keys(b).length) return false;
  
      for(let key of Object.keys(a)) {
        if(!isEqual(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
  
    return false;
  }

console.log(isEqual({a: 1},{a: 1}));
