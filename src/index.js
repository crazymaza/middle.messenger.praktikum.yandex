import noChat from "./pages/chats/noChat";
import login from "./pages/forms/login";
import register from "./pages/forms/register";
import withChat from "./pages/chats/withChat";
import listItem from "./components/chatListItem";
import button from "./components/button";
import input from "./components/input";
import camera from './img/camera.png';
import clip from './img/clip.svg';

const listItems = [
    {title: 'Andrey', subtitle: 'Message', date: 'Mon', newMessage: 11},
    {title: 'Sergey', subtitle: 'Message', date: 'Mon', newMessage: 11},
    {title: 'Pavel', subtitle: 'Message', date: 'Mon', newMessage: 0},
    {title: 'Anna', subtitle: 'Message', date: 'Mon', newMessage: 11},
    {title: 'Polina', subtitle: 'Message', date: 'Mon', newMessage: 0},
    {title: 'Igor', subtitle: 'Message', date: 'Mon', newMessage: 100444},
  ]

const loginInputs = [
    {dataId: "login", text: "Логин", type: "text"},
    {dataId: "password", text: "Пароль", type: "password"}
  ]

  const registerInputs = [
    {dataId: "email", text: "Почта", type: "email"},
    {dataId: "login", text: "Логин", type: "text"},
    {dataId: "firstName", text: "Имя", type: "text"},
    {dataId: "secondName", text: "Фамилия", type: "text"},
    {dataId: "phone", text: "Телефон", type: "tel"},
    {dataId: "password", text: "Пароль", type: "password"},
    {dataId: "passwordConfirm", text: "Пароль (ещё раз)", type: "password"},
  ]

const getContent = () => {
    const routes = [{
            path: '/login',
            component: login({
                button: button({text: "Авторизоваться"}),
                loginInputs: input({inputs: loginInputs})
            }),
        },
        {
            path: '/registry',
            component: register({
                button: button({text: "Зарегистрироваться"}),
                registerInputs: input({inputs: registerInputs})
            }),
        },
        {
            path: '/chat-1',
            component: noChat({
                listItems: listItem({listItems})
            }),
        },
        { path: '/chat-2', component: withChat({
                listItems: listItem({listItems}),
                img: camera,
                footer: clip,
            }),
        },
        // { path: '/profile', component: profile(), },
    ];
    const findedComponent = routes.filter(route => route.path === window.location.pathname)[0]?.component;
    return findedComponent ?? '<div style="text-align: center; font-size: 20px; padding-top: 10%">Такой страницы не существует</div>';
}


const root = document.querySelector("#root");
root.innerHTML = getContent();

// ==== Login form ====
const inputs = document.querySelectorAll('.formInputs input');
const labels = document.querySelectorAll('.formInputs label');

inputs.forEach(input =>
    input.addEventListener('change', () => {
        labels.forEach(label => {
            if (input.value && label.attributes['data-id'].value === input.name) {
                label.classList.add('active');
            }
            if (!input.value && label.attributes['data-id'].value === input.name) {
                label.classList.remove('active')
            }
        })
    })
)