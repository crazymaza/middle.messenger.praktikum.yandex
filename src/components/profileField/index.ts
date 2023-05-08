import Block from '../../utils/block';
import profileFieldTemplate from './profileField.hbs';
import * as classes from './profileField.module.scss';

class ProfileField extends Block {
  constructor(props: Record<string, any> = {}) {
    super('li', { ...props, ...classes });
  }

  render(): DocumentFragment {
    return this.compile(profileFieldTemplate, this.props);
  }
}

export default ProfileField;
