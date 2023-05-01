import Block from '../../utils/block';
import chatTemplate from './chat.hbs';
import Wrapper from './parts/wrapper';

class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
    const wrapper = new Wrapper();
    super('div', { ...props, wrapper });
  }


  render() {
    return this.compile(chatTemplate, this.props);
  }
}

export default Chat;
