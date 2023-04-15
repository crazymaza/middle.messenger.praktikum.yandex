import buttonTemplate from './button.hbs';
import * as classes from './button.module.scss';

interface ButtonInterface {
    text: string,
    hasSymbol?: boolean,
    type?: "submit" | "reset" | "button",
}

const button = ({ text, hasSymbol = false, type = "submit" }: ButtonInterface): string => {
    const context = {
        button: classes.button,
        text,
        hasSymbol,
        type,
    }
    return buttonTemplate(context);
}

export default button;
