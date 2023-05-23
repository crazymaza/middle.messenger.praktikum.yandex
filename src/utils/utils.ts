import { RegisterFormDataInterface } from '../types/interfaces';
import type Block from './block';
import { Indexed } from './store';

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

export const getAllFormData = (event: Event): RegisterFormDataInterface => {
  event.preventDefault();
  const result: RegisterFormDataInterface = {
    first_name: '',
    second_name: '',
    login: '',
    email: '',
    password: '',
    phone: ''
  };
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
  inputs.forEach(input => result[input.name as keyof RegisterFormDataInterface] = input.value || input.defaultValue);
  return result;
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

export const checkSubmitForm = (event: Event): RegisterFormDataInterface | undefined => {
  event.preventDefault();
  const isAllInputBlank = Array.from(document.getElementsByTagName('input'))
    .filter(item => !item.hidden)
    .every((element: HTMLInputElement) => element.value !== '');
  const isAllErrotExist = Array.from(document.querySelectorAll('input + span'))
    .every((item: HTMLSpanElement) => item.textContent === '');
  if (isAllErrotExist && isAllInputBlank) {
    return getAllFormData(event);
  }
  alert('Не заполнены все поля')
}

export const clearError = (event: Event) => {
  const target: HTMLInputElement = event.target as HTMLInputElement;
  const errorElement = document.querySelector(`span[name=${target.name}]`);
  if (target.value === '' && errorElement) {
    errorElement.textContent = '';
  }
}

export const isEqualString = (first: string, second: string): boolean => first === second;

export const trim = (string: string, chars?: string): string => {
  if (string && !chars) {
    return string.trim();
  }

  const reg = new RegExp(`[${chars}]`, "gi");
  return string.replace(reg, "");
}

const isObject = (item: Indexed<any>): boolean => {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

export const merge = (lhs: Indexed<any>, rhs: Indexed<any>): Indexed => {
  for (const p in rhs) {
    if (!Object.hasOwn(rhs, p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export const set = (state: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
  if (typeof state !== 'object' || state === null) {
    return state;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc,
  }), value as any);
  return merge(state as Indexed, result);
}

export const isEqual = (a: object, b: object): boolean => {
  return Object.entries(a).toString() === Object.entries(b).toString();
}
