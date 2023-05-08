import Block from '../../../../utils/block';
import { CHATS_1_PATH } from '../../../../utils/constants';
import ActiveChat from '../activeChat';
import rightSectionTemplate from './rightSection.hbs';
import * as classes from './rightSection.module.scss';

class RightSection extends Block {
  constructor(props: Record<string, any> = {}) {
    const section = window.location.pathname === CHATS_1_PATH
      ? '<h1>Выберите чат для отправки сообщения</h1>'
      : new ActiveChat();
    super('div', {
      ...props,
      ...classes,
      section
    });
  }

  render(): DocumentFragment {
    return this.compile(rightSectionTemplate, this.props);
  }
}

export default RightSection;
