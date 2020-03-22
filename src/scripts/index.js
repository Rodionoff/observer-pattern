import '../styles/index.scss';
import '../styles/button.scss';
import colors from './colors.js';
import domNodes from './domNodes.js';
import observer from './observer.js';

const buttons = domNodes.buttons;
const titles = domNodes.titles;
const texts = domNodes.texts;
const svgs = domNodes.svgs;

svgs.forEach(svg => 
  observer.subscribe(svg)  
)

buttons.forEach(button => {
  const color = colors.getColor(button.dataset.background);
  button.style.backgroundColor = color;
  
  if (button.dataset.clean) {
    button.onclick = () => observer.clean();
    return;
  }

  if (button.dataset.reset) {
    button.onclick = () => observer.resetColor();
    return;
  }

  if (button.dataset.animate) {
    button.onclick = () => observer.animate();
    return;
  }
   
  button.onclick = () => observer.updateColor(color)
})
