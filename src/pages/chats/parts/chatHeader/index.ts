import Button from '../../../../components/button';
import ChatController from '../../../../controllers/ChatController';
import Block from '../../../../utils/block';
import store from '../../../../utils/store';
import chatHeaderTemplate from './chatHeader.hbs';
import classes from './chatHeader.module.scss';
import modalClasses from '../../../../components/modal/modal.module.scss';

class ChatHeader extends Block {
  constructor(props: Record<string, any> = {}) {

    const buttonAdd = new Button({
      text: '+',
      type: 'button',
      events: {
        click: () => {
          store.set('modal', 'add');
          document.querySelector('#modal')?.classList.add(modalClasses.modal__active);
        }
      }
    })

    const buttonDelete = new Button({
      text: '-',
      type: 'button',
      events: {
        click: (event) => {
          store.set('modal', 'remove');
          document.querySelector('#modal')?.classList.add(modalClasses.modal__active);
          event.preventDefault();
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
