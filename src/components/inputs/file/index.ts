import Block from '../../../utils/block';
import inputFileTemplate from './input.hbs';
import * as classes from './input.module.scss';

interface InputFileInterface {
  value: string,
  isImg?: boolean
}

class InputFile extends Block {
  constructor(props: InputFileInterface) {
    super('input', { ...props, ...classes });
  }

  render(): DocumentFragment {
    return this.compile(inputFileTemplate, this.props);
  }
}

export default InputFile;
