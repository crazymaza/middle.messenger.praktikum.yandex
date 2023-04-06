import loginTemplate from "./login.hbs";
import classes from "../forms.module.scss";

const login = () => {
  const context = {
    title: "Вход",
    submitButton: "Авторизоваться",
    registerLink: "Нет аккаунта?",
    formWrapper: classes.form__wrapper,
    form: classes.form,
    formTitle: classes.form__title,
    formInputs: classes.form__inputs,
    inputTitle: classes.input__title,
    formSubmit: classes.form__submit,
    formSameBtn: classes.form__same_btn,
    inputs: [
      {dataId: "login", text: "Логин", type: "text"},
      {dataId: "password", text: "Пароль", type: "password"}
    ]
  };

  return loginTemplate(context);
};



export default login;