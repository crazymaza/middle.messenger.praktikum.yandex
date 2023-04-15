export interface AuthInterface {
    name: string, text: string, type: string
}

export interface ItemDataInterface {
    title: string,
    subtitle: string,
    date: string,
    newMessage: number,
    active?: boolean,
}

export interface MessageInterface {
    isImg?: boolean,
    img?: string,
    imgAlt?: string,
    isMine?: boolean,
    message?: string,
}

type ProfileOptions = "first" | "second" | "changeData" | "changePassword";

export type ProfileType = {
    [key in ProfileOptions]: Array<ProfileFields>
}

export interface ProfileFields {
    title: string,
    value: string,
    link?: boolean,
    href?: string,
    type?: string,
    name?: string,
}
