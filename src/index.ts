import Chat from './pages/chats';
import Error404 from './pages/errors/404';
import Error500 from './pages/errors/500';
import Signin from './pages/forms/login';
import Signup from './pages/forms/register';
import Profile from './pages/profile';
import {
  BASE_URL,
  SIGNIN_PATH,
  path,
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
import renderDom from './utils/utils';

function replacePath() {
  return window.location.replace(`${BASE_URL}${SIGNIN_PATH}`);
}

switch (path) {
  case ERROR404_PATH:
    renderDom(ROOT_DIV, new Error404());
    break;
  case ERROR500_PATH:
    renderDom(ROOT_DIV, new Error500());
    break;
  case SIGNIN_PATH:
    renderDom(ROOT_DIV, new Signin());
    break;
  case SIGNUP_PATH:
    renderDom(ROOT_DIV, new Signup());
    break;
  case PROFILE_PATH:
    renderDom(ROOT_DIV, new Profile());
    break;
  case PASSWORD_SETTING_PATH:
    renderDom(ROOT_DIV, new Profile());
    break;
  case PROFILE_SETTING_PATH:
    renderDom(ROOT_DIV, new Profile());
    break;
  case CHATS_1_PATH:
    renderDom(ROOT_DIV, new Chat());
    break;
  case CHATS_2_PATH:
    renderDom(ROOT_DIV, new Chat());
    break;
  default:
    replacePath();
}

// ==== Login form ====
const inputs: NodeListOf<Element> = document.querySelectorAll('.formInputs input');
const labels: NodeListOf<Element> = document.querySelectorAll('.formInputs label');

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
