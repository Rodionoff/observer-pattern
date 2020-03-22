import gsap from 'gsap';

class Animations {
  constructor() {
    this.timeLines = [];
    this.animationDuration = 1;
  }

  animate(subscribers, color) {
    let timeLine = gsap.timeline();

    this.timeLines.push(timeLine);

    timeLine.to(subscribers, this.animationDuration, { backgroundColor: color });
  }

  clean(subscribers, color) {
    let timeLine = gsap.timeline();

    this.timeLines.push(timeLine);
    
      timeLine.to(subscribers, this.animationDuration, { backgroundColor: color, onComplete: () => {
        timeLine.kill();
      }});
  }
}

export default new Animations();