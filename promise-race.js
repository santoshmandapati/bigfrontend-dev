/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
    // your code here
    return new Promise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(result => {
          resolve(result)
        }).catch(error => {
          reject(error)
        })
      })
    })
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved in 1 sec')
    }, 1000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved in 5 secs')
    }, 5000);
})

race([promise1, promise2]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.error(error)
})