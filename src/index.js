import noChat from "./pages/chats/noChat";
import login from "./pages/forms/login";
import register from "./pages/forms/register";
import withChat from "./pages/chats/withChat";

const getContent = () => {
    const routes = [{
            path: '/login',
            component: login(),
        },
        {
            path: '/registry',
            component: register(),
        },
        {
            path: '/chat-1',
            component: noChat(),
        },
        { path: '/chat-2', component: withChat(), },
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