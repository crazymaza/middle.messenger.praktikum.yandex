import type { AuthInterface, ProfileType } from "../types/interfaces";

export const rules: { [key: string]: { message: string; regExp?: RegExp; } } = {
    login: {
        message:
            'от 3 до 20 символов, латиница, может содержать цифры,' +
            'но не состоять из них, без пробелов,' +
            'без спецсимволов (допустимы дефис и нижнее подчёркивание).',
        regExp: /^[a-zA-Z0-9-_]{3,20}$(?<=.*?[a-zA-Z].*?)/,
    },
    first_name: {
        message:
            'латиница или кириллица, первая буква должна быть заглавной,' +
            'без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
        regExp: /^[A-Z-А-Я]+[A-Za-zА-Яа-я-]+$/,
    },
    second_name: {
        message:
            'латиница или кириллица, первая буква должна быть заглавной,' +
            'без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
        regExp: /^[A-Z-А-Я]+[A-Za-zА-Яа-я-]+$/,
    },
    email: {
        message:
            'латиница, может включать цифры и спецсимволы вроде дефиса,' +
            'обязательно должна быть «собака» (@) и точка после неё,' +
            'но перед точкой обязательно должны быть буквы.',
        regExp: /^[a-z0-9-]+@[a-z0-9-]+.[a-z]{2,6}$/,
    },
    oldPassword: {
        message:
            "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
        regExp: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
    },
    password: {
        message:
            "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
        regExp: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
    },
    password_confirm: {
        message:
            "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
        regExp: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
    },
    phone: {
        message: "от 10 до 15 символов, состоит из цифр, может начинается с плюса.",
        regExp: /^([0-9]+).{10,15}$/,
    },
    message: { message: "не должно быть пустым." },
    display_name: {
        message:
            'латиница или кириллица, первая буква должна быть заглавной,' +
            'без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
        regExp: /^[A-Z-А-Я]+[A-Za-zА-Яа-я-]+$/,
    }
};

export const loginInputs: Array<AuthInterface> = [
    { name: 'login', text: 'Логин', type: 'text' },
    { name: 'password', text: 'Пароль', type: 'password' },
];

export const registerInputs: Array<AuthInterface> = [
    { name: 'email', text: 'Почта', type: 'email' },
    { name: 'login', text: 'Логин', type: 'text' },
    { name: 'first_name', text: 'Имя', type: 'text' },
    { name: 'second_name', text: 'Фамилия', type: 'text' },
    { name: 'phone', text: 'Телефон', type: 'tel' },
    { name: 'password', text: 'Пароль', type: 'password' },
    { name: 'passwordConfirm', text: 'Пароль (ещё раз)', type: 'password' },
];

export const profileFields: ProfileType = {
    first: [
        { title: 'Почта', value: 'pochta@yandex.ru', label: 'email' },
        { title: 'Логин', value: 'ivanivanov', label: 'login' },
        { title: 'Имя', value: 'Иван', label: 'first_name' },
        { title: 'Фамилия', value: 'Иванов', label: 'last_name' },
        { title: 'Имя в чате', value: 'Иван', label: 'display_name' },
        { title: 'Телефон', value: '+7 (909) 967 30 30', label: 'phone' },
    ],
    second: [
        {
            title: 'Изменить данные', value: '', link: true, href: '/changeData',
        },
        {
            title: 'Изменить пароль', value: '', link: true, href: '/changePassword',
        },
        {
            title: 'Выйти', value: '', link: true, href: '/sign-in',
        },
    ],
    changeData: [
        {
            title: 'Почта', value: 'pochta@yandex.ru', type: 'email', name: 'email'
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
            title: 'Новый пароль', value: 'ivanivanov', type: 'password', name: 'password',
        },
        {
            title: 'Повторите пароль', value: 'ivanivanov',
            type: 'password', name: 'password_confirm'
        },
    ],
};

export const BASE_URL = window.origin;
export const SIGNIN_PATH = '/sign-in';
export const SIGNUP_PATH = '/sign-up';
export const PROFILE_PATH = '/settings';
export const PASSWORD_SETTING_PATH = '/changePassword';
export const PROFILE_SETTING_PATH = '/changeData';
export const CHATS_1_PATH = '/messenger';
export const CHATS_2_PATH = '/messenger-2';
export const ERROR404_PATH = '/404';
export const ERROR500_PATH = '/500';
export const ROOT_DIV = '#root';
export const path = window.location.pathname;

export const API_URL = 'https://ya-praktikum.tech/api/v2';
export const RESOURCES_URL = 'https://ya-praktikum.tech/api/v2/resources';
