import gsap from 'gsap';

class Animations {
  constructor() {
    this.timeLines = [];
  }


  animate(subscribers, color) {
    let timeLine = gsap.timeline();

    this.timeLines.push(timeLine);

    timeLine.to(subscribers, { backgroundColor: color, duration: 1 });
  }

  clean(subscribers, color) {
    let timeLine = gsap.timeline();

    this.timeLines.push(timeLine);
    // let delay = 0;
    
      timeLine.to(subscribers, { backgroundColor: color, duration: 1, onComplete: () => {
        timeLine.kill();
      }});
      // delay += 1;
  }

  // animateInSequence(subscribers, color) {
    // let timeLine = gsap.timeline();

    // this.timeLines.push(timeLine);

    // subscribers.forEach(subscriber => {
      // timeLine.to(subscriber, { backgroundColor: color, duration: 1});
    // })
  // }

  // resetAnimations() {
    // if (this.timeLines.length > 0) {
      // this.timeLines.forEach(tl => {
        // tl.kill();
      // })
    // }
  // }
}

export default new Animations();