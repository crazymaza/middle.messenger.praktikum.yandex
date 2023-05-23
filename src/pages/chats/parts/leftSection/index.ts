import { router } from '../../../..';
import ChatListItem from '../../../../components/chatListItem';
import Link from '../../../../components/link';
import ChatController from '../../../../controllers/ChatController';
import { ItemDataInterface } from '../../../../types/interfaces';
import Block from '../../../../utils/block';
import { PROFILE_PATH, listItemsData } from '../../../../utils/constants';
import store, { StoreEvents } from '../../../../utils/store';
import leftSectionTemplate from './leftSection.hbs';
import * as classes from './leftSection.module.scss';

class LeftSection extends Block {
  constructor(props: Record<string, any> = {}) {

    // let chatList = listItemsData.map((item: ItemDataInterface) => {
    //   return new ChatListItem({
    //     title: item.title,
    //     subtitle: item.subtitle,
    //     date: item.date,
    //     newMessage: item.newMessage,
    //     active: item.active
    //   })})

    ChatController.getChats();
    store.on(StoreEvents.Updated, () => {
      const { chats } = store.getState();
      
      //Сделать обработку массивов
      const chatList: any[] = [];
      chats.forEach((chat: any) => {
        chatList.push(new ChatListItem({
          title: chat.title,
          subtitle: chat.subtitle,
          date: chat.time ? new Date(chat.time).getDate().toString() : '',
          newMessage: chat.unread_count,
          active: false
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
    // ChatController.getChats()?.then((data) => {
    //   chatList = data.map((item: any) => (new ChatListItem({
    //     title: item.title,
    //     subtitle: item.subtitle,
    //     date: new Date(item.time).getDate().toString(),
    //     newMessage: item.unread_count,
    //     active: false
    //   }))
    // )})
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
      profile,
      // chatList
    });
  }

  render(): DocumentFragment {
    return this.compile(leftSectionTemplate, this.props);
  }
}

export default LeftSection;
