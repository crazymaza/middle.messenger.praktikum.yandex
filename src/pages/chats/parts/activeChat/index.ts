import Divider from '../../../../components/divider';
import Block from '../../../../utils/block';
import ChatFooter from '../chatFooter';
import activeChatTemplate from './activeChat.hbs';
import * as classes from './activeChat.module.scss';

class ActiveChat extends Block {
  constructor(props: Record<string, any> = {}) {
    super('div', {
      ...props,
      ...classes,
      date: new Divider({ value: '' }),
      footer: new ChatFooter(),
    });
  }

  render(): DocumentFragment {
    return this.compile(activeChatTemplate, this.props);
  }
}

export default ActiveChat;
