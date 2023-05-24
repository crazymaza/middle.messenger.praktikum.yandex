import Block from '../../../../utils/block';
import store, { StoreEvents } from '../../../../utils/store';
import ActiveChat from '../activeChat';
import ChatHeader from '../chatHeader';
import rightSectionTemplate from './rightSection.hbs';
import * as classes from './rightSection.module.scss';

class RightSection extends Block {
  constructor(props: Record<string, any> = {}) {
    const section = '<h1>Выберите чат для отправки сообщения</h1>';

    store.on(StoreEvents.Updated, () => {
      const { activeChat } = store.getState();
      if (activeChat) {
        this.setProps({
          section: new ActiveChat({
            header: new ChatHeader({ name: activeChat?.title }),
          })
        })
      }
    })

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
