function knowContext(arg) {
    console.log(this, arg);
}

//console.log(knowContext() === global);

class ClassCtx {
    hello() {
        console.log(knowContext());
    }
}

knowContext.apply({a: 'a'}, ['hello']);
