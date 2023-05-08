import Block from '../../utils/block';
import dateTemplate from './divider.hbs';
import * as classes from './divider.module.scss';

interface DividerInterface {
  value: string
}

class Divider extends Block {
  constructor(props: DividerInterface) {
    super('p', { ...props, ...classes });
  }

  render(): DocumentFragment {
    return this.compile(dateTemplate, this.props);
  }
}

export default Divider;
