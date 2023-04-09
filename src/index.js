import login from "./pages/forms/login";
import register from "./pages/forms/register";
import listItem from "./components/chatListItem";
import button from "./components/button";
import textInput from "./components/inputs/text";
import fileInput from "./components/inputs/file";
import camera from "./img/camera.png";
import clip from "./img/clip.svg";
import chatHeader from "./pages/chats/parts/chatHeader";
import chatFooter from "./pages/chats/parts/chatFooter";
import chat from "./pages/chats";
import wrapper from "./pages/chats/parts/wrapper";
import leftSection from "./pages/chats/parts/leftSection";
import rightSection from "./pages/chats/parts/rightSection";
import activeChat from "./pages/chats/parts/activeChat";
import date from "./components/date";
import message from "./components/message";
import profile from "./pages/profile";
import profileField from "./components/profileField";
import profileInput from "./components/profileInput";
import error404 from "./pages/errors/404";
import error500 from "./pages/errors/500";

const listItemsData = [
    {title: "Andrey", subtitle: "Message", date: "Mon", newMessage: 11},
    {title: "Sergey", subtitle: "Message", date: "Mon", newMessage: 11},
    {title: "Pavel", subtitle: "Message", date: "Mon", newMessage: 0, active: true},
    {title: "Anna", subtitle: "Message", date: "Mon", newMessage: 11},
    {title: "Polina", subtitle: "Message", date: "Mon", newMessage: 0},
    {title: "Igor", subtitle: "Message", date: "Mon", newMessage: 100444},
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

const messages = [
    {message: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро."},
    {isImg: true, img: camera, imgAlt: "Camera"},
    {isMine: true, message: "Круто!"}
]

const profileFields = {
    first: [
        {title: "Почта", value: "pochta@yandex.ru"},
        {title: "Логин", value: "ivanivanov"},
        {title: "Имя", value: "Иван"},
        {title: "Фамилия", value: "Иванов"},
        {title: "Имя в чате", value: "Иван"},
        {title: "Телефон", value: "+7 (909) 967 30 30"},
    ],
    second: [
        {title: "Изменить данные", value: "", link: true, href: "/changeData"},
        {title: "Изменить пароль", value: "", link: true, href: "/changePassword",},
        {title: "Выйти", value: "", link: true, href: "/login"},
    ],
    changeData: [
        {title: "Почта", value: "pochta@yandex.ru", type: "email", name: "email"},
        {title: "Логин", value: "ivanivanov", type: "text", name: "login"},
        {title: "Имя", value: "Иван", type: "text", name: "first_name"},
        {title: "Фамилия", value: "Иванов", type: "text", name: "second_name"},
        {title: "Имя в чате", value: "Иван", type: "text", name: "display_name"},
        {title: "Телефон", value: "+7(909)967-3030", type: "tel", name: "phone"},
    ],
    changePassword: [
        {title: "Старый пароль", value: "ivanivanov", type: "password", name: "oldPassword"},
        {title: "Новый пароль", value: "ivanivanov", type: "password", name: "newPassword"},
        {title: "Повторите пароль", value: "ivanivanov", type: "password"},
    ]
}

const getContent = () => {
    const messagesArr = messages.map(item => message(item));
    const routes = [{
            path: "/login",
            component: login({
                button: button({text: "Авторизоваться", type: "submit"}),
                loginInputs: textInput({inputs: loginInputs})
            }),
        },
        {
            path: "/registry",
            component: register({
                button: button({text: "Зарегистрироваться", type: "submit"}),
                registerInputs: textInput({inputs: registerInputs})
            }),
        },
        {
            path: "/chat-1",
            component: chat({
                wrapper: wrapper({
                    sections: [
                        leftSection({items: listItem({listItems: listItemsData})}),
                        rightSection({})
                    ]
                })
            }),
        },
        { 
            path: "/chat-2", 
            component: chat({
                wrapper: wrapper({
                    sections: [
                        leftSection({items: listItem({listItems: listItemsData})}),
                        rightSection({section: activeChat({
                            header: chatHeader({name: "Pavel"}),
                            footer: chatFooter({
                                button1: fileInput({value:clip, isImg: true}),
                                button2: button({text: "&rarr;", hasSymbol: true})
                            }),
                            date: date({value:"19 июня"}),
                            messages: messagesArr,
                        })})
                    ]
                })
            }),
        },
        {
            path: "/profile",
            component: profile({
                button: button({text: "&larr;", hasSymbol: true}),
                fields1: profileField({fields: profileFields.first}),
                fields2: profileField({fields: profileFields.second}),
            })
        },
        {
            path: "/changeData",
            component: profile({
                button: button({text: "&larr;", hasSymbol: true}),
                fields1: profileInput({fields: profileFields.changeData}),
                fields2: button({text: "Сохранить"})
            })
        },
        {
            path: "/changePassword",
            component: profile({
                button: button({text: "&larr;", hasSymbol: true}),
                fields1: profileInput({fields: profileFields.changePassword}),
                fields2: button({text: "Сохранить"})
            })
        },
        {
            path: "/404",
            component: error404(),
        },
        {
            path: "/500",
            component: error500(),
        },

    ];
    const findedComponent = routes.filter(route => route.path === window.location.pathname)[0]?.component;
    return findedComponent ?? error404();
}


const root = document.querySelector("#root");
root.innerHTML = getContent();

// ==== Login form ====
const inputs = document.querySelectorAll(".formInputs input");
const labels = document.querySelectorAll(".formInputs label");

inputs.forEach(input =>
    input.addEventListener("change", () => {
        labels.forEach(label => {
            if (input.value && label.attributes["data-id"].value === input.name) {
                label.classList.add("active");
            }
            if (!input.value && label.attributes["data-id"].value === input.name) {
                label.classList.remove("active")
            }
        })
    })
)