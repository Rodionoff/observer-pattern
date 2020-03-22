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

  animateBackgroundColor(element)  {
    let timeLine = gsap.timeline();

    this.timeLines.push(timeLine);

    let backgroundColor = element.style.backgroundColor;

    timeLine.to(element, this.animationDuration, { backgroundColor: backgroundColor, onComplete: () => {
    }});
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