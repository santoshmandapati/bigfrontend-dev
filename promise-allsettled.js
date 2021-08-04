/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    const wrappedPromises = promises.map(promise =>
      promise instanceof Promise ? promise : Promise.resolve(promise))
  
    if(wrappedPromises.length === 0) return Promise.resolve([]);
  
    const results = []
    let resultCounter = 0
  
    return new Promise((resolve, reject) => {
      wrappedPromises.forEach((promise, index) => {
        promise.then((data) => {
          results[index] = {
              status: 'fulfilled',
              value: data
          }
          resultCounter++;
          if(resultCounter === wrappedPromises.length) {
            resolve(results)
          }
        }, (error) => {
          results[index] = {
              status: 'rejected',
              reason: error
          }
          resultCounter++;
          if(resultCounter === wrappedPromises.length) {
            resolve(results)
          }
        })
      })
    })
  }

  allSettled([
    Promise.resolve(33),
    new Promise(resolve => setTimeout(() => resolve(66), 0)),
    99,
    Promise.reject(new Error('an error'))
  ])
  .then(values => console.log(values));