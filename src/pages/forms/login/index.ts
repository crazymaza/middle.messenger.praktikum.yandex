import loginTemplate from './login.hbs';
import * as classes from '../forms.module.scss';
import Block from '../../../utils/block';
import Input from '../../../components/inputs/text';
import Button from '../../../components/button';
import { checkInput, checkSubmitForm, clearError } from '../../../utils/utils';
import { rules, BASE_URL, SIGNUP_PATH } from '../../../utils/constants';

class Signin extends Block {
  constructor(props: Record<string, any> = {}) {
    const inputLogin = new Input({
      name: 'login',
      label: 'Логин',
      type: 'text',
      events: {
        change: (event: Event) => {
          checkInput(event, rules.login);
        },
        input: (event: Event) => {
          clearError(event);
        }
      },
    });

    const inputPassword = new Input({
      name: 'password',
      label: 'Пароль',
      type: 'password',
      events: {
        change: (event: Event) => {
          checkInput(event, rules.password);
        },
        input: (event: Event) => {
          clearError(event);
        }
      },
    });

    const button = new Button({
      text: 'Авторизоваться',
      type: 'submit',
      events: {
        click: (event: Event) => {
          checkSubmitForm(event);
        }
      }
    });

    super('div', {
      ...props,
      ...classes,
      inputLogin,
      inputPassword,
      button,
      url: `${BASE_URL}${SIGNUP_PATH}`,
      registerLink: 'Нет аккаунта?',
      title: 'Вход',
    });
  }

  render() {
    return this.compile(loginTemplate, this.props);
  }
}

export default Signin;
