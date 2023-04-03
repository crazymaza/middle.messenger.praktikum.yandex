import loginTemplate from "./register.hbs";
import "./register.module.scss";
import Handlebars from "handlebars";

const register = () => {
  const temp = Handlebars.compile(loginTemplate);
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
  };

  return temp(context);
};


export default register;