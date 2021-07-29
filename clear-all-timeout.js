
let timers = [];

let originalSetTimeout = global.setTimeout;
let originalClearTimeout = global.clearTimeout;

global.setTimeout = function (callback, timeoutInMs) {
    let context = this;
    const timer = originalSetTimeout.call(context, callback, timeoutInMs);
    timers.push(timer);
    return timer;
}

function clearAllTimeout() {
    timers.forEach(timer => {
        clearTimeout(timer);
    })
}

setTimeout(() => console.log('after timeout1'), 5000);
setTimeout(() => console.log('after timeout2'), 6000);
setTimeout(() => console.log('after timeout3'), 7000);

clearAllTimeout();