import gsap from 'gsap';
import colors from './colors.js';

class Observer {
  constructor() {
    this.subscribers = []
    this.timeLines = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(unsubscriber) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== unsubscriber)
  }

  updateColor(color) {
    this.subscribers.forEach(subscriber => {
        subscriber.style.backgroundColor = color;
    });
  }

  clean() {
    this.updateColor('initial')
  }

  resetColor() {
    if (this.timeLines.length > 0) {
      this.timeLines.forEach(tl => {
        tl.kill();
      })
    }
    this.updateColor('initial')
  }

  animate() {
    let color = colors.getRandomColor();
    
    let timeLine = gsap.timeline();

    this.timeLines.push(timeLine);

    this.subscribers.forEach(subscriber => {
      timeLine.to(subscriber, 1, {backgroundColor: color});
    })
  }
}

  

export default new Observer();