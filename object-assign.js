
function objectAssign(target, ...sources) {
    // your code here
    if(target === null || target === undefined) {
          throw new Error('target cannot be null or undefined');
    }
    if(typeof target !== 'object') {
      target = new target.__proto__.constructor(target);
    }
    for(const source of sources) {
      if(source === null || source === undefined) {
        continue;
      }
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      for(const property of Object.keys(source)) {
        target[property] = source[property];
      }
      for(const symbolProperty of Object.getOwnPropertySymbols(source)) {
        target[symbolProperty] = source[symbolProperty];
      }
    }
    return target;
  }

//objectAssign({}, {a: 1, bb: 2, ccc: 3});
const result = objectAssign({}, {a: 1, bb: 2, ccc: 3}, {'name': 'santosh', age: 33, a: 39});
console.log(result);
