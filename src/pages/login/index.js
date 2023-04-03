import loginTemplate from "./login.hbs";
import "./login.module.scss";
import Handlebars from "handlebars";

const login = () => {
  const temp = Handlebars.compile(loginTemplate);
  const context = {
    title: "Вход",
    login: "Логин",
    password: "Пароль",
    submitButton: "Авторизоваться",
    registerLink: "Нет аккаунта?",
  };

  return temp(context);
};


export default login;