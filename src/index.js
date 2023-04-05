import chat from "./pages/chat";
import login from "./pages/forms/login";
import register from "./pages/forms/register";

const pages = () => {
//    return login();
//    return register();
   return chat();
}

const root = document.querySelector("#root");
root.innerHTML = pages();

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