import Block from '../../utils/block';
import messageTemplate from './message.hbs';
import classes from './message.module.scss';

class Message extends Block {
  constructor(props: Record<string, any> = {}) {
    super('div', { ...props, ...classes });
  }
  render(): DocumentFragment {
    return this.compile(messageTemplate, this.props);
  }
}

export default Message;
