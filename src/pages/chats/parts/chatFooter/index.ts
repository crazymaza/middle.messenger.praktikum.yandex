import chatFooterTemplate from "./chatFooter.hbs";
import * as classes from "./chatFooter.module.scss";

interface ChatFooterInterface {
  button1: string,
  button2: string,
}

const chatFooter = ({ button1, button2 }: ChatFooterInterface): string => {
  const context = {
    footerForm: classes.footer__form,
    button1, button2,
  };

  return chatFooterTemplate(context);
};

export default chatFooter;
