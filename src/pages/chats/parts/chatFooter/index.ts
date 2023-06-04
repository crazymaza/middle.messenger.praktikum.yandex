import InputFile from '../../../../components/inputs/file';
import Block from '../../../../utils/block';
import chatFooterTemplate from './chatFooter.hbs';
import * as classes from './chatFooter.module.scss';
import clip from '../../../../img/clip.svg';
import Button from '../../../../components/button';
import { rules } from '../../../../utils/constants';
import store from '../../../../utils/store';

class ChatFooter extends Block {
  constructor(props: Record<string, any> = {}) {
    const button1 = new InputFile({
      value: clip,
      isImg: true,
      name: 'hidden'
    })

    const button2 = new Button({
      text: '&rarr;',
      hasSymbol: true,
      type: 'submit',
      events: {
        click: (event: Event) => {
          event.preventDefault();
          const { socket } = store.getState();
          const form: HTMLFormElement = document.forms.namedItem('messageForm') as HTMLFormElement;
          const messageInput: HTMLInputElement = document.querySelector('input[name=message]') as HTMLInputElement;
          if (messageInput.value.trim() === '') {
            document.getElementsByClassName(classes.error)[0].textContent = rules.message.message;
            return;
          }
          socket.send({ content: messageInput.value, type: "message" });
          form.reset();
        }
      }
    })

    super('footer', {
      ...props,
      ...classes,
      button1,
      button2
    });
  }

  render(): DocumentFragment {
    return this.compile(chatFooterTemplate, this.props);
  }
}

export default ChatFooter;
