var proxy, handler;
handler = {
    has(/*target, prop*/) {
        return false;
    },
    get(target, prop, receiver) {
        if (prop in target) return target[prop];
        return receiver;
    },
    set(/*target, prop, value, receiver*/) {
        return true;
    },
    defineProperty(/*target, prop, descriptor*/) {
        return true;
    },
    apply(/*target, thisArg, argumentsList*/) {
        return proxy;
    },
    construct(/*target, argumentsList, newTarget*/) {
        return proxy;
    },
    deleteProperty(/*target, prop*/) {
        return true;
    }
};
proxy = new Proxy(function() {}, handler);
module.exports = proxy;