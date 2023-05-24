import { router } from '../../../..';
import Button from '../../../../components/button';
import ChatListItem from '../../../../components/chatListItem';
import Input from '../../../../components/inputs/text';
import Link from '../../../../components/link';
import ChatController from '../../../../controllers/ChatController';
import Block from '../../../../utils/block';
import { PROFILE_PATH } from '../../../../utils/constants';
import store, { StoreEvents } from '../../../../utils/store';
import leftSectionTemplate from './leftSection.hbs';
import * as classes from './leftSection.module.scss';

class LeftSection extends Block {
  constructor(props: Record<string, any> = {}) {

    ChatController.getChats();
    store.on(StoreEvents.Updated, () => {
      const { chats, activeChat } = store.getState();

      const chatList: any[] = [];
      chats.forEach((chat: any) => {
        chatList.push(new ChatListItem({
          title: chat.title,
          subtitle: chat.subtitle,
          date: chat.time ? new Date(chat.time).getDate().toString() : '',
          newMessage: chat.unread_count,
          active: activeChat?.id === chat.id,
          chatId: chat.id,
          events: {
            click: () => {
              this.children.chatList.forEach((chatItem: any) => {
                if (chat.id === chatItem.props.chatId) {
                  store.set('activeChat', chat);
                  ChatController.getChatToketById(chat.id);
                } else {
                  chatItem.setProps({ active: false });
                }
              })
            }
          }
        }))
      })
      this.setProps({ chatList })
    })

    const profile = new Link({
      text: 'Профиль >',
      href: PROFILE_PATH,
      classes: classes.profile,
      events: {
        click: (event) => {
          event.preventDefault();
          router.go(PROFILE_PATH)
        }
      }
    })

    const newChatInput = new Input({
      name: 'newСhat',
      label: 'Название чата',
      type: 'text',
      events: {},
    })

    const createNewChat = new Button({
      text: 'Создать новый чат',
      type: 'submit',
      events: {
        click: (event: any) => {
          event.preventDefault();
          if (event.target && event.target.form[0]?.value) {
            ChatController.createNewChat(event.target.form[0].value)
              ?.then(() => {
                event.target.form[0].value = null;
                event.target.form[0].labels[0].classList.remove('active');
              })
          }
        }
      }
    })

    super('div', {
      ...props,
      ...classes,
      profile,
      newChatInput,
      createNewChat
    });
  }

  render(): DocumentFragment {
    return this.compile(leftSectionTemplate, this.props);
  }
}

export default LeftSection;
