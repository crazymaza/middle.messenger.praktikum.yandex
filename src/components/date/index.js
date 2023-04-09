import dateTemplate from "./date.hbs";
import * as classes from "./date.module.scss";

const date = ({value}) => {
  const context = {
    chatInnerDate: classes.chat__inner_date,
    value,
  };

  return dateTemplate(context);
};

export default date;