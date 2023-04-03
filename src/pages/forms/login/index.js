import loginTemplate from "./login.hbs";
import classes from "../forms.module.scss";

const login = () => {
  const context = {
    title: "Вход",
    login: "Логин",
    password: "Пароль",
    submitButton: "Авторизоваться",
    registerLink: "Нет аккаунта?",
    formWrapper: classes.form__wrapper,
    form: classes.form,
    formTitle: classes.form__title,
    formInputs: classes.form__inputs,
    inputTitle: classes.input__title,
    formSubmit: classes.form__submit,
    formSameBtn: classes.form__same_btn,
  };

  return loginTemplate(context);
};



export default login;