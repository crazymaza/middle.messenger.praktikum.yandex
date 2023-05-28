import registerTemplate from './register.hbs';
import * as classes from '../forms.module.scss';
import Block from '../../../utils/block';
import Input from '../../../components/inputs/text';
import type { AuthInterface, RegisterFormDataInterface } from '../../../types/interfaces';
import Button from '../../../components/button';
import { checkInput, checkSubmitForm, clearError } from '../../../utils/utils';
import { BASE_URL, SIGNIN_PATH, rules } from '../../../utils/constants';
import Link from '../../../components/link';
import { router } from '../../..';
import AuthController from '../../../controllers/AuthController';

const registerInputs: Array<AuthInterface> = [
  { name: 'email', text: 'Почта', type: 'email' },
  { name: 'login', text: 'Логин', type: 'text' },
  { name: 'first_name', text: 'Имя', type: 'text' },
  { name: 'second_name', text: 'Фамилия', type: 'text' },
  { name: 'phone', text: 'Телефон', type: 'tel' },
  { name: 'password', text: 'Пароль', type: 'password' },
  { name: 'password_confirm', text: 'Пароль (ещё раз)', type: 'password' },
];

class Signup extends Block {
  constructor(props: Record<string, any> = {}) {
    const inputs = registerInputs.reduce((acc, curr) => ({
      ...acc,
      [curr.name]:
        new Input({
          name: curr.name,
          label: curr.text,
          type: curr.type,
          events: {
            change: (event: Event) => {
              const target: HTMLInputElement = event.target as HTMLInputElement
              checkInput(event, rules[target.name]);
            },
            input: (event: Event) => {
              clearError(event);
            }
          },
        }),
    }), {});

    const button = new Button({
      text: 'Зарегистрироваться',
      type: 'submit',
      events: {
        click: (event: Event) => {
          const registerFormData: RegisterFormDataInterface | undefined = checkSubmitForm(event, 'register');
          if (registerFormData) {
            const dataWithoutComfirmPass = Object.keys(registerFormData)
              .filter((key: string) => key !== 'password_confirm')
              .reduce((acc, curr: keyof RegisterFormDataInterface) => ({ ...acc, [curr]: registerFormData[curr] }), {});
            AuthController.registerUser(dataWithoutComfirmPass as RegisterFormDataInterface);
          }
        }
      }
    });

    const signinLink = new Link({
      text: 'Войти',
      href: SIGNIN_PATH,
      classes: classes.form__same_btn,
      events: {
        click: (event) => {
          event.preventDefault();
          router.go(SIGNIN_PATH);
        },
      },
    })

    super('div', {
      ...props,
      ...classes,
      ...inputs,
      button,
      url: `${BASE_URL}${SIGNIN_PATH}`,
      signinLink,
      title: 'Регистрация',
    });
  }

  render(): DocumentFragment {
    return this.compile(registerTemplate, this.props);
  }
}

export default Signup;
