import Message from '../../../../components/message';
import { MessageInterface } from '../../../../types/interfaces';
import Block from '../../../../utils/block';
import { messages } from '../../../../utils/constants';
import ChatFooter from '../chatFooter';
import ChatHeader from '../chatHeader';
import activeChatTemplate from './activeChat.hbs';
import * as classes from './activeChat.module.scss';


class ActiveChat extends Block {
  constructor(props: Record<string, any> = {}) {
    const activeMessages = messages.map((message: MessageInterface) => new Message({
      isMine: message.isMine,
      text: message.text,
      isImg: message.isImg,
      img: message.img,
      imgAlt: message.imgAlt,
    }))

    super('div', {
      ...props,
      ...classes,
      message1: activeMessages[0],
      message2: activeMessages[1],
      message3: activeMessages[2],
      header: new ChatHeader({ name: 'Pavel' }),
      footer: new ChatFooter(),
    });
  }

  render(): DocumentFragment {
    return this.compile(activeChatTemplate, this.props);
  }
}

export default ActiveChat;
