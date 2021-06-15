
function add(arg1, arg2) {
  const result = arg1 + arg2;
  console.log(`${arg1} + ${arg2} = ${result}`);
  return result;
}

function memo(func, resolver = (...args) => args.join("_")) {
  // your code here
  const memoStore = {};
  return function(...args) {
    const context = this;
    const key = resolver(...args);
    if(!memoStore[key]) {
      memoStore[key] = func.apply(context, args);
    }
    return memoStore[key];
  }
}

//add(2, 3);
//add(2, 3);

const memoAdd = memo(add);

memoAdd(2, 4);
memoAdd(2, 4);
memoAdd(2, 4);
memoAdd(3, 5);
memoAdd(2, 4);
memoAdd(2, 1);