import { ProfileFields } from "../../types/interfaces";
import profileFieldTemplate from "./profileField.hbs";
import * as classes from "./profileField.module.scss";

interface ProfileFieldInterface {
  fields: Array<ProfileFields>
}

const profileField = ({ fields }: ProfileFieldInterface): string => {
  const context = {
    fieldsTitle: classes.fields__title,
    fieldsValue: classes.fields__value,
    fieldWrapper: classes.field__wrapper,
    fields,
  };

  return profileFieldTemplate(context);
};

export default profileField;
