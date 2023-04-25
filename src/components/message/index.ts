import type { MessageInterface } from '../../types/interfaces';
import Block from '../../utils/block';
import messageTemplate from './message.hbs';
import * as classes from './message.module.scss';

class Message extends Block {
  context: MessageInterface & {[key: string]: string};

  constructor(props: MessageInterface = {}) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(messageTemplate, { ...this.props });
  }
}

export default Message;
