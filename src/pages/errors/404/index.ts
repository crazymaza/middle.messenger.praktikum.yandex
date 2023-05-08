import errorTemplate from './404.hbs';
import * as classes from '../errors.module.scss';
import Block from '../../../utils/block';

class Error404 extends Block {
  constructor(props: Record<string, any> = {}) {
    super('div', { ...props, ...classes });
  }

  render(): DocumentFragment {
    return this.compile(errorTemplate, this.props);
  }
}

export default Error404;
