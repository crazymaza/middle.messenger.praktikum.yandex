import wrapperTemplate from "./wrapper.hbs";
import * as classes from "./wrapper.module.scss";

const wrapper = ({sections}) => {
  const context = {
    chatWrapper: classes.chat__wrapper,
    sections
  };

  return wrapperTemplate(context);
};

export default wrapper;
