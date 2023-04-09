import profileTemplate from "./profile.hbs";
import classes from "./profile.module.scss";

const profile = ({header, footer, date = "", messages = []}) => {
  const context = {
    chatWrapper: classes.chat__wrapper,
    chatInner: classes.chat__inner,
    date,
    messages,
    header,
    footer
  };

  return profileTemplate(context);
};

export default profile;