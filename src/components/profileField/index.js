import profileFieldTemplate from "./profileField.hbs";
import * as classes from "./profileField.module.scss";

const profileField = ({fields}) => {
  const context = {
    fieldsTitle: classes.fields__title, 
    fieldsValue: classes.fields__value,
    fieldWrapper: classes.field__wrapper,
    fields,
  };

  return profileFieldTemplate(context);
};

export default profileField;
