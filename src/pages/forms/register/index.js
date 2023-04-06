import registerTemplate from "./register.hbs";
import classes from "../forms.module.scss";

const register = () => {
  const context = {
    title: "Регистрация",
    submitButton: "Зарегистрироваться",
    enterLink: "Войти",
    formWrapper: classes.form__wrapper,
    form: classes.form,
    formTitle: classes.form__title,
    formInputs: classes.form__inputs,
    inputTitle: classes.input__title,
    formSubmit: classes.form__submit,
    formSameBtn: classes.form__same_btn,
    inputs: [
      {dataId: "email", text: "Почта", type: "email"},
      {dataId: "login", text: "Логин", type: "text"},
      {dataId: "firstName", text: "Имя", type: "text"},
      {dataId: "secondName", text: "Фамилия", type: "text"},
      {dataId: "phone", text: "Телефон", type: "tel"},
      {dataId: "password", text: "Пароль", type: "password"},
      {dataId: "passwordConfirm", text: "Пароль (ещё раз)", type: "password"},
    ]
  };

  return registerTemplate(context);
};


export default register;