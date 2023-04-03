import registerTemplate from "./register.hbs";
import classes from "../forms.module.scss";

const register = () => {
  const context = {
    title: "Регистрация",
    email: "Почта",
    login: "Логин",
    firstName: "Имя",
    secondName: "Фамилия",
    phone: "Телефон",
    password: "Пароль",
    passwordConfirm: "Пароль (ещё раз)",
    submitButton: "Зарегистрироваться",
    enterLink: "Войти",
    formWrapper: classes.form__wrapper,
    form: classes.form,
    formTitle: classes.form__title,
    formInputs: classes.form__inputs,
    inputTitle: classes.input__title,
    formSubmit: classes.form__submit,
    formSameBtn: classes.form__same_btn,
  };

  return registerTemplate(context);
};


export default register;