import activeChatTemplate from "./activeChat.hbs";
import * as classes from "./activeChat.module.scss";

const activeChat = ({header, footer, date = "", messages = []}) => {
  const context = {
    chatWrapper: classes.chat__wrapper,
    chatInner: classes.chat__inner,
    date,
    messages,
    header,
    footer
  };

  return activeChatTemplate(context);
};

export default activeChat;
