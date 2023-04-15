import chatFooterTemplate from "./chatFooter.hbs";
import * as classes from "./chatFooter.module.scss";

const chatFooter = ({button1, button2}) => {
  const context = {
    footerForm: classes.footer__form,
    button1, button2,
  };

  return chatFooterTemplate(context);
};

export default chatFooter;
