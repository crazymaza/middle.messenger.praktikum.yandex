import Block from '../../../../utils/block';
import chatHeaderTemplate from './chatHeader.hbs';
import * as classes from './chatHeader.module.scss';

class ChatHeader extends Block {
  constructor(props: Record<string, any> = {}) {
    super('div', { ...props, ...classes });
  }

  render(): DocumentFragment {
    return this.compile(chatHeaderTemplate, this.props);
  }
}

export default ChatHeader;
