import '../styles/index.scss';
import '../styles/button.scss';
import domNodes from './DomNodes.js';
import observer from './Observer.js';

const buttons = domNodes.buttons;
const titles = domNodes.titles;
const texts = domNodes.texts;
const svgs = domNodes.svgs;

svgs.forEach(svg => 
  observer.subscribe(svg)  
)

observer.setInitialColor();


buttons.forEach((button, i) => {

  const buttonsBackgroundColor = button.dataset.background;

  if (button.dataset.clean) {
    button.onclick = () => observer.clean(buttonsBackgroundColor);
    return;
  }

  button.onclick = () => observer.updateColor(buttonsBackgroundColor)
})
