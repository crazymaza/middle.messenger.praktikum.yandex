import Chat from './pages/chats';
import Error404 from './pages/errors/404';
import Error500 from './pages/errors/500';
import Signin from './pages/forms/login';
import Signup from './pages/forms/register';
import Profile from './pages/profile';
import {
  SIGNIN_PATH,
  ERROR404_PATH,
  ROOT_DIV,
  ERROR500_PATH,
  SIGNUP_PATH,
  PROFILE_PATH,
  PASSWORD_SETTING_PATH,
  PROFILE_SETTING_PATH,
  CHATS_1_PATH,
  CHATS_2_PATH
} from './utils/constants';
import Router from './utils/router/router';

export const router = new Router(ROOT_DIV);

router
  .use('/', Signin)
  .use(ERROR404_PATH, Error404)
  .use(ERROR500_PATH, Error500)
  .use(SIGNIN_PATH, Signin)
  .use(SIGNUP_PATH, Signup)
  .use(PROFILE_PATH, Profile)
  .use(PASSWORD_SETTING_PATH, Profile)
  .use(PROFILE_SETTING_PATH, Profile)
  .use(CHATS_1_PATH, Chat)
  .use(CHATS_2_PATH, Chat)
  .start()

// ==== Login form ====
const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.formInputs input');
const labels: NodeListOf<HTMLLabelElement> = document.querySelectorAll('.formInputs label');

inputs.forEach((input: HTMLInputElement) => input.addEventListener('change', () => {
  labels.forEach((label: HTMLLabelElement) => {
    if (input.value && label.attributes.getNamedItem('data-id')?.value === input.name) {
      label.classList.add('active');
    }
    if (!input.value && label.attributes.getNamedItem('data-id')?.value === input.name) {
      label.classList.remove('active');
    }
  });
}));
