import Handlebars from 'handlebars';
import chatListItemTemplate from './chatListItem.hbs';
import * as classes from './chatListItem.module.scss';
import type { ItemDataInterface } from '../../types/interfaces';
import Block from '../../utils/block';
import Button from '../button';
import ChatController from '../../controllers/ChatController';
import store from '../../utils/store';

Handlebars.registerPartial('dots', (value) => {
  const stringText = String(value);
  return stringText.length > 2 ? `${stringText.slice(0, 2)}..` : value;
});

class ChatListItem extends Block {
  constructor(props: ItemDataInterface) {
    const deleteButton = new Button({
      hasSymbol: true,
      text: '',
      type: 'button',
      events: {
        click: (event) => {
          event.preventDefault();
          event.stopPropagation();
          ChatController.deleteChat(this.props.chatId)
        }
      }
    })

    super('li', { ...classes, ...props, deleteButton });
  }

  render(): DocumentFragment {
    return this.compile(chatListItemTemplate, this.props);
  }
}

export default ChatListItem;
