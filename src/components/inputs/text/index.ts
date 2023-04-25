import type { AuthInterface } from '../../../types/interfaces';
import inputTemplate from './input.hbs';
import * as classes from './input.module.scss';

interface InputTextInterface {
    inputs: Array<AuthInterface>
}

const input = ({ inputs }: InputTextInterface): string => {
  const context = {
    inputTitle: classes.input__title,
    inputs,
  };
  return inputTemplate(context);
};

export default input;
