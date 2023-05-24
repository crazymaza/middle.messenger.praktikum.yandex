import Button from '../../../../components/button';
import ChatUserProfile from '../../../../components/chatUserProfile';
import ChatController from '../../../../controllers/ChatController';
import Block from '../../../../utils/block';
import store, { StoreEvents } from '../../../../utils/store';
import chatHeaderTemplate from './chatHeader.hbs';
import * as classes from './chatHeader.module.scss';

class ChatHeader extends Block {
  constructor(props: Record<string, any> = {}) {

    const buttonAdd = new Button({
      text: 'Добавить пользователя',
      type: 'button',
      events: {
        click: (event) => {
          const { activeChat } = store.getState();
          event.preventDefault();
          ChatController.addUsersToChat([1], activeChat?.id);
        }
      }
    })

    const dots = new Button({
      text: '.',
      type: 'button',
      events: {
        click: (event) => {
          event.preventDefault();
          const { activeChat, chatModalOpen } = store.getState();
          ChatController.getChatUsers(activeChat?.id)
            ?.then((resp: { response: string }) => JSON.parse(resp.response))
            .then(data => {
              store.set('chatUsers', data)
              store.set('chatModalOpen', !chatModalOpen || true)
            })
        }
      }
    })

    // {
    //   "id": 123,
    //   "first_name": "petya",
    //   "second_name": "petrov",
    //   "display_name": "petya petrov",
    //   "login": "my-login",
    //   "email": "my@email.com",
    //   "phone": "89223332211",
    //   "avatar": "/path/to/my-file.jpg",
    //   "role": "admin"
    // }


    store.on(StoreEvents.Updated, () => {
      const usersProfiles: any[] = [];
      const { chatUsers } = store.getState();
      chatUsers.forEach((user: any) => {
        usersProfiles.push(new ChatUserProfile({
          id: user.id,
          name: user.first_name,
          surname: user.second_name,
          avatar: user.avatar
        }))
      })
      console.log(usersProfiles)
      this.setProps({ usersProfiles })
    })


    super('div', { ...props, ...classes, dots, buttonAdd });
  }

  render(): DocumentFragment {
    return this.compile(chatHeaderTemplate, this.props);
  }
}

export default ChatHeader;
