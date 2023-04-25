import Block from '../../utils/block';
import chatTemplate from './chat.hbs';
import type Wrapper from './parts/wrapper';

interface ChatInterface {
  wrapper: Wrapper,
}

class Chat extends Block<ChatInterface> {
  constructor(tagName: string, props: ChatInterface) {
    super(tagName, props);
    this.children = props.wrapper;
  }

  context = {
    wrapper: this.props.wrapper,
  };

  render(): DocumentFragment {
    return this.compile(chatTemplate, { ...this.props.wrapper });
  }
}

export default Chat;
