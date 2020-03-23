import animations from './Animations.js';

class Observer {
  constructor() {
    this.subscribers = []
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(unsubscriber) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== unsubscriber)
  }

  updateColor(color) {
      animations.animate(this.subscribers, color);
  }

  setInitialColor() {
    animations.setInitialColor(this.subscribers);
  }

  clean(color) {
    animations.clean(this.subscribers, color);
  }
}



export default new Observer();