import Block from '../../../../utils/block';
import wrapperTemplate from './wrapper.hbs';
import * as classes from './wrapper.module.scss';

interface WrapperInterface {
  sections: Array<Block>,
}

class Wrapper extends Block<WrapperInterface> {
  constructor(tagName: string, props: WrapperInterface) {
    super(tagName, props);
    this.children = props.sections;
  }

  context = {
    chatWrapper: classes.chat__wrapper,
    sections: this.props.sections,
  };

  render(): DocumentFragment {
    return this.compile(wrapperTemplate, { ...this.props.sections });
  }
}

export default Wrapper;
