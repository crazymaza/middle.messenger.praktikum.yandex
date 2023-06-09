import Block from '../../utils/block';
import buttonTemplate from './button.hbs';
import classes from './button.module.scss';

interface ButtonInterface {
    text: string,
    hasSymbol?: boolean,
    type?: 'submit' | 'reset' | 'button',
    events: {[key: string]: (event: Event) => void}
}

class Button extends Block {
  constructor(props: ButtonInterface) {
    super('button', { ...props, ...classes });
  }

  render(): DocumentFragment {
    return this.compile(buttonTemplate, this.props);
  }
}

export default Button;
