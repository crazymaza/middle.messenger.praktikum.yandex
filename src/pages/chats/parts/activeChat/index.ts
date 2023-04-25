import Message from '../../../../components/message';
import activeChatTemplate from './activeChat.hbs';
import * as classes from './activeChat.module.scss';

interface ActiveChat {
  header: string,
  footer: string,
  date?: string,
  messages?: Array<Message>
}

const activeChat = ({
  header, footer, date = '', messages = [],
}: ActiveChat): string => {
  const context = {
    chatWrapper: classes.chat__wrapper,
    chatInner: classes.chat__inner,
    date,
    messages,
    header,
    footer,
  };

  return activeChatTemplate(context);
};

export default activeChat;
