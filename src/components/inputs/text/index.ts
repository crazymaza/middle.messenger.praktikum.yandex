import Block from '../../../utils/block';
import inputTemplate from './input.hbs';
import * as classes from './input.module.scss';

interface InputProps {
  name: string;
  label: string;
  type: string;
  events: {
    change?: (event: Event) => void;
    input?: (event: Event) => void;
  };
}

class Input extends Block {
  constructor(props: InputProps) {
    super('input', { ...props, ...classes });
  }

  render() {
    return this.compile(inputTemplate, this.props);
  }
}

export default Input;
