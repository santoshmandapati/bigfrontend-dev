
class NodeStore {
    
    NodeStore() {
        this.store = {};
    }

    set(node, value) {
        this.store[Symbol.for(node).toString()] = value;
    }

    get(node) {
        return this.store(Symbol.for(node).toString());
    }

    has(node) {
        return this.store(Symbol.for(node).toString()) !== null;
    }
}
