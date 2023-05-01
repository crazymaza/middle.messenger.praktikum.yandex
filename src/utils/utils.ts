import type Block from './block';

function renderDom(query: string, block: Block) {
  const root = document.querySelector(query) as HTMLElement;

  root.appendChild(block.getContent());
  // flow:component-did-mount триггерится вне блока в функции renderDom.
  // Это связано с тем, что оно должно быть вызвано после того,
  // как компонент появился в DOM дереве («замаунтился»).
  block.dispatchComponentDidMount();

  return root;
}

export default renderDom;

const getAllFormData = (event: Event) => {
  event.preventDefault();
  const result: { [key: string]: string } = {};
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
  inputs.forEach(input => result[input.name] = input.value || input.defaultValue);
  console.log(result);
}

export const checkInput = (event: Event, rules: { [key: string]: any }) => {
  if (!event.target) return;
  const target: HTMLInputElement = event.target as HTMLInputElement;
  const errorElement = document.querySelector(`span[name=${target.name}]`);
  if (target.defaultValue && target.value === '') {
    target.value = target.defaultValue;
  }
  if (!rules.regExp.test(target.value)) {
    if (errorElement) {
      errorElement.textContent = rules.message;
    }
    return target.focus();
  }
  return errorElement ? errorElement.textContent = '' : null;
}

export const checkSubmitForm = (event: Event) => {
  event.preventDefault();
  const isAllInputBlank = Array.from(document.getElementsByTagName('input'))
    .filter(item => !item.hidden)
    .every((element: HTMLInputElement) => element.value !== '');
  const isAllErrotExist = Array.from(document.querySelectorAll('input + span'))
    .every((item: HTMLSpanElement) => item.textContent === '');
  isAllErrotExist && isAllInputBlank ?
    getAllFormData(event) : alert('Не заполнены все поля')
}

export const clearError = (event: Event) => {
  const target: HTMLInputElement = event.target as HTMLInputElement;
  const errorElement = document.querySelector(`span[name=${target.name}]`);
  if (target.value === '' && errorElement) {
    errorElement.textContent = '';
  }
}
