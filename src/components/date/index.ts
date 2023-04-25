import dateTemplate from './date.hbs';
import * as classes from './date.module.scss';

interface DateInterface {
  value: string
}

const date = ({ value }: DateInterface): string => {
  const context = {
    chatInnerDate: classes.chat__inner_date,
    value,
  };

  return dateTemplate(context);
};

export default date;
