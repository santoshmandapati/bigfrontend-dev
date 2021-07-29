
class Observable {
    constructor(setup) {
        if(typeof setup !== 'function') throw new Error('constructor param should be a function');
        this._setup = setup;
    }

    subscribe(subscriber) {
        const wrapper = {
            unsubscribed : false,
            next(value) {
                if(this.unsubscribed) return;
                if(typeof subscriber === 'function') return subscriber(value);
                return subscriber.next ? subscriber.next(value) : null;
            },
            error(err) {
                if(this.unsubscribed) return;
                this.unsubscribe();
                return subscriber.error ? subscriber.error(err) : null;
            },
            complete() {
                if(this.unsubscribed) return;
                this.unsubscribe();
                return subscriber.complete ? subscriber.complete() : null;
            },
            unsubscribe() {
                this.unsubscribed = true;
            }
        }
        this._setup(wrapper);
        return wrapper;
    }
}

const observable = new Observable(subscriber => {
    subscriber.next(1);
    setTimeout(() => {
        subscriber.next(2);
        subscriber.complete();
    }, 2000);
});

const observer = {
    next: (value) => console.log(`next value: ${value}`),
    error: (error) => console.error(`error: ${error}`),
    complete: () => console.log('completed')
};

const wrapper = observable.subscribe(observer);
setTimeout(() => {
    wrapper.unsubscribe();
}, 500);
