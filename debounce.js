
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

function log() {
    console.log('log')
}

const debounced = debounce(log, 1000);

for(let i=0; i < 100; i++) {
    debounced();
}
