import errorTemplate from './500.hbs';
import * as classes from '../errors.module.scss';
import Block from '../../../utils/block';

class Error500 extends Block {
  constructor(props: Record<string, any> = {}) {
    super('div', { ...props, ...classes });
  }

  render(): DocumentFragment {
    return this.compile(errorTemplate, this.props);
  }
}

export default Error500;
