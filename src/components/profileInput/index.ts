import type { ProfileFields } from '../../types/interfaces';
import profileInputTemplate from './profileInput.hbs';
import * as classes from './profileInput.module.scss';

interface ProfileInputInterface {
  fields: Array<ProfileFields>
}

const profileInput = ({ fields }: ProfileInputInterface): string => {
  const context = {
    fieldsTitle: classes.fields__title,
    fieldsValue: classes.fields__value,
    fieldWrapper: classes.field__wrapper,
    fields,
  };

  return profileInputTemplate(context);
};

export default profileInput;
