import Block from '../../../../utils/block';
import { RESOURCES_URL } from '../../../../utils/constants';
import store, { StoreEvents } from '../../../../utils/store';
import ActiveChat from '../activeChat';
import ChatHeader from '../chatHeader';
import rightSectionTemplate from './rightSection.hbs';
import classes from './rightSection.module.scss';
import avatarTmp from '../../../../img/avatarTmp.png'
import Message from '../../../../components/message';

class RightSection extends Block {
  constructor(props: Record<string, any> = {}) {
    const section = '<h1>Выберите чат для отправки сообщения</h1>';

    store.on(StoreEvents.Updated, () => {
      const { activeChat } = store.getState();
      if (activeChat) {
        const { user, messages, socket } = store.getState()
        socket?.message();
        const messagesArr = messages && messages[activeChat.id];
        const chatMessages = messagesArr?.map((message: any) => new Message({
            isMine: user.id === message.user_id,
            text: message.content,
            isImg: message.file !== null,
            img: message.img,
            imgAlt: message.imgAlt,
            id: message.id,
          }))
        this.setProps({
          section: new ActiveChat({
            header: new ChatHeader({
              name: activeChat?.title,
              avatarPath: `${activeChat.avatar ? `${RESOURCES_URL}${activeChat.avatar}` : avatarTmp}`
            }),
            chatMessages
          })
        })
      }
    })

    super('div', {
      ...props,
      ...classes,
      section
    });
  }

  render(): DocumentFragment {
    return this.compile(rightSectionTemplate, this.props);
  }
}

export default RightSection;
