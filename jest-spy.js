/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
    // your code here
  
    if(typeof obj !== 'object') {
      throw new Error('param should be object type');
    }
  
    const actualMethod = obj[methodName].bind(obj);
    const calls = [];
  
    obj[methodName] = function _proxy(...args) {
      calls.push(args);
      actualMethod(args);
    }
  
    return {
      calls
    }
  }

  const obj = {
    data: 1, 
    increment(num) {
       this.data += num
    }
 }
 
 const spy = spyOn(obj, 'increment')
 obj.increment(1)
 console.log(obj.data) // 2
 obj.increment(2)
 console.log(obj.data) // 4
 console.log(spy.calls)