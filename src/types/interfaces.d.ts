export interface AuthInterface {
    name: string, text: string, type: string
}

export interface ItemDataInterface {
    title: string,
    subtitle: string,
    date: string,
    newMessage: number,
    chatId: number,
    active?: boolean,
    events?: {[key: string]: () => void}
}

export interface MessageInterface {
    isImg?: boolean,
    img?: string,
    imgAlt?: string,
    isMine?: boolean,
    text?: string,
}

type ProfileOptions = 'first' | 'second' | 'changeData' | 'changePassword';

export interface ProfileFields {
    title: string,
    value: string,
    link?: boolean,
    href?: string,
    type?: string,
    name?: string,
    label?: string,
}

export type ProfileType = {
    [key in ProfileOptions]: Array<ProfileFields>
}

export interface RegisterFormDataInterface {
    [x: string]: string;
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string,
}

export interface LoginFormDataInterface {
    login: string,
    password: string,
}

export interface ProfileInterface {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
    avatar: string,
}
