import gsap from 'gsap';

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
    this.subscribers.forEach(subscriber => {
      // if (subscriber.tagName === 'svg') {
        subscriber.style.backgroundColor = color;
      // }

      // subscriber.style.color = color;
    });
  }

  resetColor() {
    this.updateColor('initial')
  }
}

  

export default new Observer();