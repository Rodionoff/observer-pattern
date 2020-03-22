import '../styles/index.scss';
import '../styles/button.scss';
import colors from './Colors.js';
import domNodes from './DomNodes.js';
import observer from './Observer.js';

const buttons = domNodes.buttons;
const titles = domNodes.titles;
const texts = domNodes.texts;
const svgs = domNodes.svgs;

svgs.forEach(svg => 
  observer.subscribe(svg)  
)

buttons.forEach((button, i) => {
  if (i === 0) {
    // set initial icons background
    const initialColor = colors.getColorById(i)
    observer.updateColor(initialColor)
  }

  const color = colors.getColor(button.dataset.background);
  // button.style.backgroundColor = color;

  if (button.dataset.clean) {
    button.onclick = () => observer.clean(color);
    return;
  }

  button.onclick = () => observer.updateColor(color)
})
