class Middleware {

    constructor() {
        this.fns = [];
        this.errorHandlers = [];
    }
    
    use(func) {
      console.log(`func.length: ${func.length}`);
      func.length === 3 ? this.errorHandlers.push(func) : this.fns.push(func);
    }
  
    start(req) {
      let isError = false;
      let index = 0;

      while(!isError && index < this.fns.length) {
          try {
            const fn = this.fns[index++];  
            fn.call(this, req);
          } catch(error) {
            isError = true;  
            this.errorHandlers.forEach(errorHandler => {
                errorHandler.call(this, error, req);
            })
          }
      }
    }
}

const middleware = new Middleware();

middleware.use((req, next) => {
    req.a = 1;
    console.log(JSON.stringify(req));
    throw new Error('its all wrong');
});

middleware.use((req, next) => {
    req.b = 2;
    console.log(JSON.stringify(req));
});

middleware.use((error, req, next) => {
    console.error(error);
    console.log(req);
});

middleware.start({});
