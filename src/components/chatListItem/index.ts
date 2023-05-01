import Handlebars from 'handlebars';
import chatListItemTemplate from './chatListItem.hbs';
import * as classes from './chatListItem.module.scss';
import type { ItemDataInterface } from '../../types/interfaces';
import Block from '../../utils/block';

Handlebars.registerPartial('dots', (value) => {
  const stringText = String(value);
  return stringText.length > 2 ? `${stringText.slice(0, 2)}..` : value;
});

class ChatListItem extends Block {
  constructor(props: ItemDataInterface) {
    super('li', { ...classes, ...props });
  }

  render(): DocumentFragment {
    return this.compile(chatListItemTemplate, this.props);
  }
}

export default ChatListItem;
