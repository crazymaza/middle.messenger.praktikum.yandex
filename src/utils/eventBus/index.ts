export default class EventBus {
  listeners: { [key: string]: Array<() => any> };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: () => any) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: [{ [key: string]: any }?, { [key: string]: any }?]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener: (el1?: { [key: string]: any },
      el2?: { [key: string]: any }) => any) => listener(...args));
  }
}
