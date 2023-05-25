import Button from '../../../../components/button';
import ChatController from '../../../../controllers/ChatController';
import Block from '../../../../utils/block';
import store from '../../../../utils/store';
import chatHeaderTemplate from './chatHeader.hbs';
import * as classes from './chatHeader.module.scss';

class ChatHeader extends Block {
  constructor(props: Record<string, any> = {}) {

    const buttonAdd = new Button({
      text: '+',
      type: 'button',
      events: {
        click: (event) => {
          const { activeChat } = store.getState();
          event.preventDefault();
          ChatController.addUsersToChat([973928], activeChat?.id)
            ?.then(() => alert('В чат добавлен пользователь'))
            .catch(() => alert('Не удалось добавить пользователя'))
        }
      }
    })

    const buttonDelete = new Button({
      text: '-',
      type: 'button',
      events: {
        click: (event) => {
          const { activeChat } = store.getState();
          event.preventDefault();
          ChatController.deleteUser(activeChat?.id, [973928])
            ?.then(() => alert('Пользователь удалён из чата'))
            .catch(() => alert('Не удалось удалить пользователя'))
        }
      }
    })

    const dots = new Button({
      text: '.',
      type: 'button',
      events: {
        click: (event) => {
          event.preventDefault();
          const { activeChat } = store.getState();
          ChatController.getChatUsers(activeChat?.id)
        }
      }
    })

    super('div', { ...props, ...classes, dots, buttonAdd, buttonDelete });
  }

  render(): DocumentFragment {
    return this.compile(chatHeaderTemplate, this.props);
  }
}

export default ChatHeader;
