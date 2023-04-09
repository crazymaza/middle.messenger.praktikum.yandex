import buttonTemplate from './button.hbs';
import * as classes from './button.module.scss';

const button = ({text, hasSymbol}) => {
    const context = {
        button: classes.button,
        text,
        hasSymbol,
    }
    return buttonTemplate(context);
}

export default button;