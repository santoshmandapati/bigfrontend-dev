
// please complete the implementation
class EventEmitter {

    subscribers = new Map();
  
    subscribe(eventName, callback) {
        let eventSubs = this.subscribers.get(eventName) || [];
      eventSubs.push(callback);
      this.subscribers.set(eventName, eventSubs);
  
      return {
        release: () => {
            let eventSubs = this.subscribers.get(eventName) || [];
            let rest = eventSubs.filter(e => e !== callback);
            this.subscribers.set(eventName, rest);
          }
      }
    }
    
    emit(eventName, ...args) {
        const eventSubs = this.subscribers.get(eventName);
        for(let sub of eventSubs) {
            sub(...args);
        }
    }
  }
  
  // testtting
  const emitter = new EventEmitter();

  const sub1 = emitter.subscribe('click', (...args) => console.log('clicked' + args));
  const sub2 = emitter.subscribe('click', () => console.log('clicked'));

  emitter.emit('click', 'hello', 1);