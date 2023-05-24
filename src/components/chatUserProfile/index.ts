import chatUserProfileTemplate from './chatUserProfile.hbs';
import * as classes from './chatUserProfile.module.scss';
import Block from '../../utils/block';
import Button from '../button';
import ChatController from '../../controllers/ChatController';

class ChatUserProfile extends Block {
  constructor(props: Record<string, any>) {
    const deleteButton = new Button({
      hasSymbol: true,
      text: '',
      type: 'button',
      events: {
        click: (event) => {
          event.preventDefault();
          event.stopPropagation();
          ChatController.deleteUser(this.props.chatId, [1])
        }
      }
    })

    super('li', { ...classes, ...props, deleteButton });
  }

  render(): DocumentFragment {
    return this.compile(chatUserProfileTemplate, this.props);
  }
}

export default ChatUserProfile;
