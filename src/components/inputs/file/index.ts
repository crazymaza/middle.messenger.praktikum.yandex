import inputFileTemplate from './input.hbs';
import * as classes from './input.module.scss';

interface InputFileInterface {
    value: string,
    isImg?: boolean
}

const inputFile = ({ value, isImg = true }: InputFileInterface): string => {
  const context = {
    labelClass: classes.label,
    value,
    isImg,
  };
  return inputFileTemplate(context);
};

export default inputFile;
