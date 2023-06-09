import loginTemplate from './login.hbs';
import classes from '../forms.module.scss';
import Block from '../../../utils/block';
import Input from '../../../components/inputs/text';
import Button from '../../../components/button';
import { checkInput, checkSubmitForm, clearError } from '../../../utils/utils';
import { rules, BASE_URL, SIGNUP_PATH } from '../../../utils/constants';
import { LoginFormDataInterface } from '../../../types/interfaces';
import Link from '../../../components/link';
import { router } from '../../..';
import  AuthController from '../../../controllers/AuthController';

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
          const registerFormData: LoginFormDataInterface | undefined = checkSubmitForm(event, 'login');
          if (registerFormData) {
              AuthController.authUser(registerFormData);
          }
        } 
      }
    });

    const signupLink = new Link({
      text: 'Нет аккаунта?',
      href: SIGNUP_PATH,
      classes: classes.form__same_btn,
      events: {
        click: (event) => {
          event.preventDefault();
          router.go(SIGNUP_PATH);
        },
      },
    })

    super('div', {
      ...props,
      ...classes,
      inputLogin,
      inputPassword,
      button,
      url: `${BASE_URL}${SIGNUP_PATH}`,
      signupLink,
      title: 'Вход',
    });
  }

  render() {
    return this.compile(loginTemplate, this.props);
  }
}

export default Signin;
