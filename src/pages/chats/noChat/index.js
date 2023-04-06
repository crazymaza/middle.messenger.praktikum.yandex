import chatTemplate from "./noChat.hbs";
import classes from "../chat.module.scss";
import Handlebars from 'handlebars';

Handlebars.registerPartial('dots', (value) => {
  const stringText = String(value);
  return stringText.length > 2 ? `${stringText.slice(0,2)}..` : value;
});
const noChat = () => {
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
    data: [
      {title: 'Andrey', subtitle: 'Message', date: 'Mon', new: 11},
      {title: 'Sergey', subtitle: 'Message', date: 'Mon', new: 11},
      {title: 'Pavel', subtitle: 'Message', date: 'Mon', new: 0},
      {title: 'Anna', subtitle: 'Message', date: 'Mon', new: 11},
      {title: 'Polina', subtitle: 'Message', date: 'Mon', new: 0},
      {title: 'Igor', subtitle: 'Message', date: 'Mon', new: 100444},
    ]
  };

  return chatTemplate(context);
};



export default noChat;