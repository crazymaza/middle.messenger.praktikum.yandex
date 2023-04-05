import chatTemplate from "./chat.hbs";
import classes from "./chat.module.scss";

const chat = () => {
  const context = {
    chatWrapper: classes.chat__wrapper,
    chatLeftSection: classes.chat__left_section,
    profile: classes.profile,
    search: classes.search,
    chatList: classes.chat__list,
    chatListItem: classes.chat__list_item,
    chatAvatar: classes.chat__avatar,
    chatTitle: classes.chat__title,
    chatSubtitle: classes.chat__subtitle,
    chatDateTime: classes.chat__date_time,
    chatNewMessage: classes.chat__new_message,
    chatRightSection: classes.chat__right_section,
    chatItemWrapper: classes.chat__item_wrapper,
  };

  return chatTemplate(context);
};



export default chat;