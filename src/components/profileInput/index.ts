import Block from '../../utils/block';
import profileInputTemplate from './profileInput.hbs';
import classes from './profileInput.module.scss';

class ProfileInput extends Block {
  constructor(props: Record<string, any> = {}){
    super('li', {...props, ...classes});
  }

  render(): DocumentFragment {
      return this.compile(profileInputTemplate, this.props);
  }
}
export default ProfileInput;
