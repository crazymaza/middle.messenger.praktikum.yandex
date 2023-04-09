import inputTemplate from './input.hbs';
import classes from './input.module.scss';

const input = ({inputs}) => {
    const context = {
        inputTitle: classes.input__title,
        inputs
    }
    return inputTemplate(context);
}

export default input;