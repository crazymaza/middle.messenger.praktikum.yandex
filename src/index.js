import login from "./pages/login";
import register from "./pages/register";

const pages = () => {
//    return login();
   return register();
}

const root = document.querySelector("#root");
root.innerHTML = pages();

// ==== Login form ====
const inputs = document.querySelectorAll('.form__inputs input');
const labels = document.querySelectorAll('.form__inputs label');

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