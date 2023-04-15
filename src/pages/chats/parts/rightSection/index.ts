import rightSectionTemplate from "./rightSection.hbs";
import * as classes from "./rightSection.module.scss";

interface RightSectionInterface {
  section?: string
}

const NO_CHAT_TEXT = "<h1>Выберите чат чтобы отправить сообщение</h1>";

const rightSection = ({section = NO_CHAT_TEXT}: RightSectionInterface) => {
  const context = {
    chatRightSection: classes.chat__right_section,
    section
  };

  return rightSectionTemplate(context);
};

export default rightSection;
