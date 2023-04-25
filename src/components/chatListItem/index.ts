import Handlebars from 'handlebars';
import chatListItemTemplate from './chatListItem.hbs';
import * as classes from './chatListItem.module.scss';
import type { ItemDataInterface } from '../../types/interfaces';

interface ChatListItemInterface {
    listItems: Array<ItemDataInterface>
}

Handlebars.registerPartial('dots', (value) => {
  const stringText = String(value);
  return stringText.length > 2 ? `${stringText.slice(0, 2)}..` : value;
});

const chatListItem = ({ listItems }: ChatListItemInterface): string => {
  const context = {
    chatListItem: classes.chat__list_item,
    chatAvatar: classes.chat__avatar,
    chatTitle: classes.chat__title,
    chatSubtitle: classes.chat__subtitle,
    chatDateTime: classes.chat__date_time,
    chatNewMessage: classes.chat__new_message,
    chatItemWrapper: classes.chat__item_wrapper,
    activeItem: classes.chat__list_item_active,
    listItems,
  };
  return chatListItemTemplate(context);
};

export default chatListItem;
