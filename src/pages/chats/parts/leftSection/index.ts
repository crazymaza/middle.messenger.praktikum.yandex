import ChatListItem from '../../../../components/chatListItem';
import { ItemDataInterface } from '../../../../types/interfaces';
import Block from '../../../../utils/block';
import { listItemsData } from '../../../../utils/constants';
import leftSectionTemplate from './leftSection.hbs';
import * as classes from './leftSection.module.scss';

class LeftSection extends Block {
  constructor(props: Record<string, any> = {}) {

    const chats = listItemsData.map((item: ItemDataInterface) => {
      return new ChatListItem({
        title: item.title,
        subtitle: item.subtitle,
        date: item.date,
        newMessage: item.newMessage,
        active: item.active
      })
    })

    super('div', {
      ...props,
      ...classes,
      chat1: chats[0],
      chat2: chats[1],
      chat3: chats[2],
      chat4: chats[3],
      chat5: chats[4],
      chat6: chats[5],
    });
  }

  render(): DocumentFragment {
    return this.compile(leftSectionTemplate, this.props);
  }
}

export default LeftSection;
