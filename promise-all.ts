
function all<T>(promises: Array<Promise<T>>) {
    
    return new Promise((resolve, reject) => {
        let results = [];
        let pending = promises.length;

        promises.forEach(promise =>  {
            promise.then((result) => {
                results.push(result);
                pending--;
                if(pending === 0) resolve(results);
            }, reject)
        });
    });
}
