/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
    let isFulfilled = false
    const errors = []
    let errorCount = 0
  
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise.then((data) => {
          if(!isFulfilled) {
            isFulfilled = true;
            resolve(data)
          }
        }, (error) => {
          errors[index] = error;
          errorCount++;
          if(errorCount === promises.length) {
            reject(new AggregateError(
              'no promise resolved',
              errors
            ))
          }
        })
      })
    })
  }

  const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
  });
  
  any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
  })