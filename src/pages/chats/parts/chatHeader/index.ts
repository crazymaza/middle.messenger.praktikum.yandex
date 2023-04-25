import chatHeaderTemplate from './chatHeader.hbs';
import * as classes from './chatHeader.module.scss';

interface ChatHeaderInterface {
  name: string
}

const chatHeader = ({ name }: ChatHeaderInterface): string => {
  const context = {
    chatNav: classes.chat__nav,
    chatNavAvatar: classes.nav__avatar,
    chatNavName: classes.nav__name,
    navDots: classes.nav__dots,
    name,
  };

  return chatHeaderTemplate(context);
};

export default chatHeader;
