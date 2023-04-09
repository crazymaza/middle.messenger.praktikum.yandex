import rightSectionTemplate from "./rightSection.hbs";
import * as classes from "./rightSection.module.scss";

const NO_CHAT_TEXT = "<h1>Выберите чат чтобы отправить сообщение</h1>";

const rightSection = ({section = NO_CHAT_TEXT}) => {
  const context = {
    chatRightSection: classes.chat__right_section,
    section
  };

  return rightSectionTemplate(context);
};

export default rightSection;