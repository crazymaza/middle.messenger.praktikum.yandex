import chatHeaderTemplate from "./chatHeader.hbs";
import classes from "./chatHeader.module.scss";

const chatHeader = ({name}) => {
  const context = {
    chatNav: classes.chat__nav,
    chatNavAvatar: classes.nav__avatar,
    chatNavName: classes.nav__name,
    navDots: classes.nav__dots,
    name
  };

  return chatHeaderTemplate(context);
};

export default chatHeader;