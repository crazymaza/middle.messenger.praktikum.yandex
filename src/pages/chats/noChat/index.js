import chatTemplate from "./noChat.hbs";
import classes from "../chat.module.scss";

const noChat = ({listItems}) => {
  const context = {
    chatWrapper: classes.chat__wrapper,
    chatLeftSection: classes.chat__left_section,
    profile: classes.profile,
    search: classes.search,
    chatRightSection: classes.chat__right_section,
    listItems
  };

  return chatTemplate(context);
};

export default noChat;