import type { TemplateDelegate } from 'handlebars';
import login from './pages/forms/login';
import register from './pages/forms/register';
import listItem from './components/chatListItem';
import button from './components/button';
import textInput from './components/inputs/text';
import fileInput from './components/inputs/file';
import camera from './img/camera.png';
import clip from './img/clip.svg';
import chatHeader from './pages/chats/parts/chatHeader';
import chatFooter from './pages/chats/parts/chatFooter';
import chat from './pages/chats';
import wrapper from './pages/chats/parts/wrapper';
import leftSection from './pages/chats/parts/leftSection';
import rightSection from './pages/chats/parts/rightSection';
import activeChat from './pages/chats/parts/activeChat';
import date from './components/date';
import profile from './pages/profile';
import profileField from './components/profileField';
import profileInput from './components/profileInput';
import error404 from './pages/errors/404';
import error500 from './pages/errors/500';
import type {
  AuthInterface, ItemDataInterface, MessageInterface, ProfileType,
} from './types/interfaces';
import Message from './components/message';
import RightSection from './pages/chats/parts/rightSection';
import Block from './utils/block';
import Chat from './pages/chats';
import Wrapper from './pages/chats/parts/wrapper';
import render from './utils/utils';

const listItemsData: Array<ItemDataInterface> = [
  {
    title: 'Andrey', subtitle: 'Message', date: 'Mon', newMessage: 11,
  },
  {
    title: 'Sergey', subtitle: 'Message', date: 'Mon', newMessage: 11,
  },
  {
    title: 'Pavel', subtitle: 'Message', date: 'Mon', newMessage: 0, active: true,
  },
  {
    title: 'Anna', subtitle: 'Message', date: 'Mon', newMessage: 11,
  },
  {
    title: 'Polina', subtitle: 'Message', date: 'Mon', newMessage: 0,
  },
  {
    title: 'Igor', subtitle: 'Message', date: 'Mon', newMessage: 100444,
  },
];

const loginInputs: Array<AuthInterface> = [
  { name: 'login', text: 'Логин', type: 'text' },
  { name: 'password', text: 'Пароль', type: 'password' },
];

const registerInputs: Array<AuthInterface> = [
  { name: 'email', text: 'Почта', type: 'email' },
  { name: 'login', text: 'Логин', type: 'text' },
  { name: 'first_name', text: 'Имя', type: 'text' },
  { name: 'second_name', text: 'Фамилия', type: 'text' },
  { name: 'phone', text: 'Телефон', type: 'tel' },
  { name: 'password', text: 'Пароль', type: 'password' },
  { name: 'passwordConfirm', text: 'Пароль (ещё раз)', type: 'password' },
];

const messages: Array<MessageInterface> = [
  {
    text: `Привет! Смотри, тут всплыл интересный кусок
   лунной космической истории — НАСА в какой-то
    момент попросила Хассельблад адаптировать модель
     SWC для полетов на Луну. Сейчас мы все знаем что
      астронавты летали с моделью 500 EL — и к слову говоря,
       все тушки этих камер все еще находятся на поверхности Луны,
        так как астронавты с собой забрали только кассеты с пленкой.
         Хассельблад в итоге адаптировал SWC для космоса, но что-то
          пошло не так и на ракету они так никогда и не попали.
           Всего их было произведено 25 штук, одну из них недавно продали
            на аукционе за 45000 евро.`,
  },
  { isImg: true, img: camera, imgAlt: 'Camera' },
  { isMine: true, text: 'Круто!' },
];

const profileFields: ProfileType = {
  first: [
    { title: 'Почта', value: 'pochta@yandex.ru' },
    { title: 'Логин', value: 'ivanivanov' },
    { title: 'Имя', value: 'Иван' },
    { title: 'Фамилия', value: 'Иванов' },
    { title: 'Имя в чате', value: 'Иван' },
    { title: 'Телефон', value: '+7 (909) 967 30 30' },
  ],
  second: [
    {
      title: 'Изменить данные', value: '', link: true, href: '/changeData',
    },
    {
      title: 'Изменить пароль', value: '', link: true, href: '/changePassword',
    },
    {
      title: 'Выйти', value: '', link: true, href: '/login',
    },
  ],
  changeData: [
    {
      title: 'Почта', value: 'pochta@yandex.ru', type: 'email', name: 'email',
    },
    {
      title: 'Логин', value: 'ivanivanov', type: 'text', name: 'login',
    },
    {
      title: 'Имя', value: 'Иван', type: 'text', name: 'first_name',
    },
    {
      title: 'Фамилия', value: 'Иванов', type: 'text', name: 'second_name',
    },
    {
      title: 'Имя в чате', value: 'Иван', type: 'text', name: 'display_name',
    },
    {
      title: 'Телефон', value: '+7(909)967-3030', type: 'tel', name: 'phone',
    },
  ],
  changePassword: [
    {
      title: 'Старый пароль', value: 'ivanivanov', type: 'password', name: 'oldPassword',
    },
    {
      title: 'Новый пароль', value: 'ivanivanov', type: 'password', name: 'newPassword',
    },
    { title: 'Повторите пароль', value: 'ivanivanov', type: 'password' },
  ],
};

const getContent = (): TemplateDelegate<any> => {
  const messagesArr: Array<Message> = messages.map(({
    img, isImg, isMine, imgAlt, text,
  }) => new Message(
    'div',
    {
      img, isMine, imgAlt, isImg, text,
    },
  ));
  const routes: Array<{path: string, component?: Block}> = [{
    path: '/login',
    component: login({
      button: button({ text: 'Авторизоваться', type: 'submit' }),
      inputs: textInput({ inputs: loginInputs }),
    }),
  },
  {
    path: '/registry',
    component: register({
      button: button({ text: 'Зарегистрироваться', type: 'submit' }),
      inputs: textInput({ inputs: registerInputs }),
    }),
  },
  {
    path: '/chat-1',
    // component: chat({
    //   wrapper: wrapper({
    //     sections: [
    //       leftSection({ items: listItem({ listItems: listItemsData }) }),
    //       new RightSection('div'),
    //     ],
    //   }),
    // }),
  },
  {
    path: '/chat-2',
    // component: chat({
    //   wrapper: wrapper({
    //     sections: [
    //       leftSection({ items: listItem({ listItems: listItemsData }) }),
    //       // rightSection({
    //       //   section: activeChat({
    //       //     header: chatHeader({ name: 'Pavel' }),
    //       //     footer: chatFooter({
    //       //       button1: fileInput({ value: clip, isImg: true }),
    //       //       button2: button({ text: '&rarr;', hasSymbol: true }),
    //       //     }),
    //       //     date: date({ value: '19 июня' }),
    //       //     messages: messagesArr,
    //       //   }),
    //       // }),
    //       new RightSection('div', {
    //         section: messagesArr,
    //       }),
    //     ],
    //   }),
    // }),
    component: new Chat('div', {
      wrapper: new Wrapper('div', {
        sections: [new RightSection('div', { section: messagesArr })],
      }),
    }),
  },
  {
    path: '/profile',
    component: profile({
      button: button({ text: '&larr;', hasSymbol: true, type: 'button' }),
      fields1: profileField({ fields: profileFields.first }),
      fields2: profileField({ fields: profileFields.second }),
    }),
  },
  {
    path: '/changeData',
    component: profile({
      button: button({ text: '&larr;', hasSymbol: true, type: 'button' }),
      fields1: profileInput({ fields: profileFields.changeData }),
      fields2: button({ text: 'Сохранить' }),
    }),
  },
  {
    path: '/changePassword',
    component: profile({
      button: button({ text: '&larr;', hasSymbol: true, type: 'button' }),
      fields1: profileInput({ fields: profileFields.changePassword }),
      fields2: button({ text: 'Сохранить' }),
    }),
  },
  {
    path: '/404',
    component: error404(),
  },
  {
    path: '/500',
    component: error500(),
  },

  ];

  const findedComponent = routes
    .filter((route) => route.path === window.location.pathname)[0]?.component;
  findedComponent?.render();
  return findedComponent;
};

const messagesArr: Array<Message> = messages.map(({
  img, isImg, isMine, imgAlt, text,
}) => new Message(
  'div',
  {
    img, isMine, imgAlt, isImg, text,
  },
));

render('#root', new Chat('section', {
  wrapper: new Wrapper('div', {
    sections: [new RightSection('div', { section: messagesArr })],
  }),
}));

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
