
function once(func) {
    let isCalled = false;
    let returnValue;
  
    return function(...args) {
        if(isCalled) {
            return returnValue;
        }
        returnValue = func.call(this, ...args);
        isCalled = true;
        return returnValue;
    };
}

function func(b, c){
    return this.a + b + c
}
  
const onced = once(func)
const obj = {
    a: 1,
    onced
}
  
console.log(obj.onced(2,3))
console.log(obj.onced(4,5))
