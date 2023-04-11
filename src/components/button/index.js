import buttonTemplate from './button.hbs';
import * as classes from './button.module.scss';

const button = ({text, hasSymbol = false, type = "submit"}) => {
    const context = {
        button: classes.button,
        text,
        hasSymbol,
        type,
    }
    return buttonTemplate(context);
}

export default button;
