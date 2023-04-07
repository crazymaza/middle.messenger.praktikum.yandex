import chatTemplate from "./withChat.hbs";
import classes from "../chat.module.scss";
import Handlebars from 'handlebars';

Handlebars.registerHelper('classes', function(num) {
  if(num.toString() === '2') return classes.chat__list_item_active;
  return classes.chat__list_item;
});

const withChat = ({listItems, img, footer}) => {
  const context = {
    chatWrapper: classes.chat__wrapper,
    chatLeftSection: classes.chat__left_section,
    profile: classes.profile,
    search: classes.search,
    chatList: classes.chat__list,
    chatRightSection: classes.chat__right_section,
    chatItemWrapper: classes.chat__item_wrapper,
    chatActive: classes.chat__active,
    chatWrapper: classes.chat__wrapper,
    chatNav: classes.chat__nav,
    chatNavAvatar: classes.nav__avatar,
    chatNavName: classes.nav__name,
    navDots: classes.nav__dots,
    chatInner: classes.chat__inner,
    chatInnerDate: classes.chat__inner_date,
    chatMessage: classes.chat__message,
    chatMyMessage: classes.chat__message_my,
    listItems,
    img,
    footer,
  };

  return chatTemplate(context);
};

export default withChat;