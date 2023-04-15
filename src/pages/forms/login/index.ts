import loginTemplate from "./login.hbs";
import * as classes from "../forms.module.scss";
import { FormsInterface } from "../forms";

const login = ({button, inputs}: FormsInterface): string => {
  const context = {
    title: "Вход",
    registerLink: "Нет аккаунта?",
    formWrapper: classes.form__wrapper,
    form: classes.form,
    formInputs: classes.form__inputs,
    formTitle: classes.form__title,
    formSameBtn: classes.form__same_btn,
    button,
    inputs
  };

  return loginTemplate(context);
};

export default login;
