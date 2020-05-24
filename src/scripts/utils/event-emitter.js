// Observer pattern

export default class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    addListener(name, callback) {
        this.listeners[name] = this.listeners[name] || [];
        this.listeners[name].push(callback);
    }

    triggerEvent(name, payload) {
        (this.listeners[name] || []).forEach((callback) => callback(payload));
    }
}
