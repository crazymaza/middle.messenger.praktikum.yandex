import Modal from '../../../../components/modal';
import Block from '../../../../utils/block';
import LeftSection from '../leftSection';
import RightSection from '../rightSection';
import wrapperTemplate from './wrapper.hbs';
import classes from './wrapper.module.scss';

class Wrapper extends Block {
  constructor(props: Record<string, any> = {}) {

    const leftSection = new LeftSection();
    const rightSection = new RightSection();
    const modal = new Modal();

    super('div', {
      ...props,
      ...classes,
      leftSection,
      rightSection,
      modal
    });
  }

  render(): DocumentFragment {
    return this.compile(wrapperTemplate, this.props);
  }
}

export default Wrapper;
