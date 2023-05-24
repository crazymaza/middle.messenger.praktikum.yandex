import { router } from '../../../..';
import ChatListItem from '../../../../components/chatListItem';
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
      const { chats } = store.getState();
      
      const chatList: any[] = [];
      chats.forEach((chat: any) => {
        chatList.push(new ChatListItem({
          title: chat.title,
          subtitle: chat.subtitle,
          date: chat.time ? new Date(chat.time).getDate().toString() : '',
          newMessage: chat.unread_count,
          active: true
        }))
      })
      this.setProps({chatList})
    })

    // [
    //   {
    //     "id": 123,
    //     "title": "my-chat",
    //     "avatar": "/123/avatar1.jpg",
    //     "unread_count": 15,
    //     "last_message": {
    //       "user": {
    //         "first_name": "Petya",
    //         "second_name": "Pupkin",
    //         "avatar": "/path/to/avatar.jpg",
    //         "email": "my@email.com",
    //         "login": "userLogin",
    //         "phone": "8(911)-222-33-22"
    //       },
    //       "time": "2020-01-02T14:22:22.000Z",
    //       "content": "this is message content"
    //     }
    //   }
    // ]

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
    
    super('div', {
      ...props,
      ...classes,
      profile
    });
  }

  render(): DocumentFragment {
    return this.compile(leftSectionTemplate, this.props);
  }
}

export default LeftSection;
