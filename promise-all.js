/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    const wrappedPromises = promises.map(promise => 
      promise instanceof Promise ? promise : Promise.resolve(promise))
  
    if(wrappedPromises.length === 0) return Promise.resolve([])
      
    const results = []
    let resultCounter = 0
    return new Promise((resolve, reject) => {
      wrappedPromises.forEach((promise, index) => {
        promise.then((data) => {
          results[index] = data
          resultCounter++
          if(resultCounter === wrappedPromises.length) {
            resolve(results)
          }
        }, (error) => {
          reject(error)
        })
      })
    })
  }

  const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('promise1 resolved')
      }, 1000);
  })

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise2 resolved')
    }, 2000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('promise3 resolved')
        reject('promise3 rejected')
    }, 3000);
})

all([promise1, promise2, promise3]).then((data) => {console.log(data)}, (error) => console.error(error))