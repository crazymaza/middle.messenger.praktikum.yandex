import registerTemplate from "./register.hbs";
import * as classes from "../forms.module.scss";
import { FormsInterface } from "../forms";

const register = ({button, inputs}: FormsInterface): string => {
  const context = {
    title: "Регистрация",
    enterLink: "Войти",
    formWrapper: classes.form__wrapper,
    form: classes.form,
    formTitle: classes.form__title,
    formInputs: classes.form__inputs,
    formSameBtn: classes.form__same_btn,
    button, 
    inputs
  };

  return registerTemplate(context);
};

export default register;
