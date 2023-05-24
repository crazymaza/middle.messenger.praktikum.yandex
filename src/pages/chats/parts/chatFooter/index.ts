import InputFile from '../../../../components/inputs/file';
import Block from '../../../../utils/block';
import chatFooterTemplate from './chatFooter.hbs';
import * as classes from './chatFooter.module.scss';
import clip from '../../../../img/clip.svg';
import Button from '../../../../components/button';
import { checkSubmitForm } from '../../../../utils/utils';
import { rules } from '../../../../utils/constants';

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
          checkSubmitForm(event);
          if (document.querySelector('input[name=message]')?.textContent === '') {
            document.getElementsByClassName(classes.error)[0].textContent = rules.message.message;
          }
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
