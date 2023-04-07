import registerTemplate from "./register.hbs";
import classes from "../forms.module.scss";

const register = ({button, registerInputs}) => {
  const context = {
    title: "Регистрация",
    enterLink: "Войти",
    formWrapper: classes.form__wrapper,
    form: classes.form,
    formTitle: classes.form__title,
    formInputs: classes.form__inputs,
    formSameBtn: classes.form__same_btn,
    button, 
    registerInputs
  };

  return registerTemplate(context);
};

export default register;