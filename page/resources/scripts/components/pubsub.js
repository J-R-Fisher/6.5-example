class EventEmitter {
    constructor() {
      this.listeners = {};
    }
  
    on(message, listener) {
      if (!this.listeners[message]) {
        this.listeners[message] = [];
      }
      this.listeners[message].push(listener);
    }
  
    emit(message, payload = null) {
      if (this.listeners[message]) {
        this.listeners[message].forEach((l) => l(message, payload));
      }
    }
}

const Messages = {
    MOVE_LEFT: 'MOVE_LEFT',
    MOVE_RIGHT: 'MOVE_RIGHT',
    MOVE_UP: 'MOVE_UP',
    MOVE_DOWN: 'MOVE_DOWN',
};

const eventEmitter = new EventEmitter();