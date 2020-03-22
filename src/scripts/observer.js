import gsap from 'gsap';
import colors from './colors.js';

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

  animate() {
    let time = 0;
    let color = colors.getRandomColor()
    this.subscribers.forEach(subscriber => {
      gsap.to(subscriber, time, {backgroundColor: color});
      time+=1;
    })
  }
}

  

export default new Observer();