import gsap from 'gsap';
import colors from './Colors.js';

class Animations {
  constructor() {
    this.timeLines = [];
    this.animationDuration = 1;
  }

  animate(subscribers, backgroundColor) {
    const color = colors.getColor(backgroundColor);
    let timeLine = gsap.timeline();

    this.timeLines.push(timeLine);

    timeLine.to(subscribers, this.animationDuration, { backgroundColor: color });
  }

  setInitialColor(subscribers) {
    const initialColor = colors.getInitialColor();

    let timeLine = gsap.timeline();

    this.timeLines.push(timeLine);

    timeLine.to(subscribers, this.animationDuration, {
      backgroundColor: initialColor, onComplete: () => {
        timeLine.kill();
      }
    });
  }

  clean(subscribers, backgroundColor) {
    const color = colors.getColor(backgroundColor);

    let timeLine = gsap.timeline();

    this.timeLines.push(timeLine);

    timeLine.to(subscribers, this.animationDuration, {
      backgroundColor: color, onComplete: () => {
        timeLine.kill();
      }
    });
  }
}

export default new Animations();