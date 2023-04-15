import wrapperTemplate from "./wrapper.hbs";
import * as classes from "./wrapper.module.scss";

interface WrapperInterface {
  sections: Array<string>,
}

const wrapper = ({ sections }: WrapperInterface): string => {
  const context = {
    chatWrapper: classes.chat__wrapper,
    sections
  };

  return wrapperTemplate(context);
};

export default wrapper;
