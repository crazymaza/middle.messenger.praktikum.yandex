import buttonTemplate from './button.hbs';
import classes from './button.module.scss';

const button = ({text}) => {
    const context = {
        formSubmit: classes.form__submit,
        text
    }
    return buttonTemplate(context);
}

export default button;