import profileTemplate from './profile.hbs';
import avatarTmp from '../../img/avatarTmp.png'
import classes from './profile.module.scss';
import Block from '../../utils/block';
import ProfileField from '../../components/profileField';
import Button from '../../components/button';
import ProfileInput from '../../components/profileInput';
import { checkInput, checkSubmitForm, clearError, getAllFormData, parseJson } from '../../utils/utils';
import {
  profileFields,
  rules,
  PASSWORD_SETTING_PATH,
  PROFILE_SETTING_PATH,
  CHATS_1_PATH,
  RESOURCES_URL
} from '../../utils/constants';
import { router } from '../..';
import Link from '../../components/link';
import InputFile from '../../components/inputs/file';
import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';
import store from '../../utils/store';
import ChatController from '../../controllers/ChatController';

const getFields = (): ProfileInput[] | {
  fields1: ProfileField[];
  fields2: ProfileField[];
} => {
  const fields1 = profileFields.first.reduce((acc, curr) => [
    ...acc,
    new ProfileField({
      title: curr.title,
      value: curr.value,
      link: curr.link,
      href: curr.href,
      type: curr.label,
      name: curr.name,
      label: curr.label,
    }),
  ], []);

  const fields2 = profileFields.second.reduce((acc, curr) => [
    ...acc,
    new ProfileField({
      title: curr.title,
      value: curr.value,
      link: curr.link,
      fieldLink: new Link({
        text: curr.title,
        href: curr.href || '',
        events: {
          click: (event) => {
            if (curr.title === 'Выйти') {
              AuthController.logout();
            }
            event.preventDefault();
            router.go(curr.href || '')
          }
        }
      }),
      type: curr.label,
      name: curr.name,
      label: curr.label,
    })], []);

  const changeData = profileFields.changeData.reduce((acc, curr) => [
    ...acc,
    new ProfileInput({
      title: curr.title,
      value: curr.value,
      link: curr.link,
      href: curr.href,
      type: curr.title,
      name: curr.name,
      events: {
        change: (event: Event) => {
          const target: HTMLInputElement = event.target as HTMLInputElement
          checkInput(event, rules[target.name]);
        },
        input: (event: Event) => clearError(event)
      },
    })], []);

  const changePassword = profileFields.changePassword.reduce((acc, curr) => [
    ...acc,
    new ProfileInput({
      title: curr.title,
      value: curr.value,
      type: curr.type,
      name: curr.name,
      events: {
        change: (event: Event) => {
          const target: HTMLInputElement = event.target as HTMLInputElement
          checkInput(event, rules[target.name]);
        },
        input: (event: Event) => clearError(event)
      },
    })], []);

  const path: string = window.location.pathname;
  switch (path) {
    case PASSWORD_SETTING_PATH:
      return changePassword;
    case PROFILE_SETTING_PATH:
      return changeData;
    default:
      return { fields1, fields2 };
  }
}

class Profile extends Block {
  constructor(props: Record<string, any> = {}) {
    const fields: ProfileInput[] | {
      fields1: ProfileField[];
      fields2: ProfileField[];
    } = getFields();
    const formName = Array.isArray(fields) ? 'profileChange' : 'profile';
    const avatar1 = new InputFile({
      isImg: true,
      value: '',
      name: 'avatar1',
      labelClass: classes.profile__avatar
    });

    const avatar2 = new InputFile({
      isImg: true,
      value: '',
      name: 'avatar2',
      labelClass: classes.profile__avatar
    })
    let profileName = '';
    const { user } = store.getState();
    if (!user) {
      AuthController.getUser()?.then(
        (data: any) => {
          const field = Array.isArray(fields) ? fields : fields.fields1
          field.forEach((item) => {
            item.setProps({ value: data[item.props.label || item.props.name] })
          })
          this.setProps({ profileName: data.first_name });
          avatar1.setProps({ value: data.avatar ? `${RESOURCES_URL}${data.avatar}` : avatarTmp });
          avatar2.setProps({ value: data.avatar ? `${RESOURCES_URL}${data.avatar}` : avatarTmp });
        }
      )
    } else {
      const field = Array.isArray(fields) ? fields : fields.fields1
      field.forEach((item) => {
        item.setProps({ value: user[item.props.label || item.props.name] })
      })
      profileName = user.first_name;
      avatar1.setProps({ value: user.avatar ? `${RESOURCES_URL}${user.avatar}` : avatarTmp });
      avatar2.setProps({ value: user.avatar ? `${RESOURCES_URL}${user.avatar}` : avatarTmp });
    }



    super('form', {
      ...props,
      ...classes,
      email: Array.isArray(fields) ? fields[0] : fields.fields1[0],
      login: Array.isArray(fields) ? fields[1] : fields.fields1[1],
      name: Array.isArray(fields) ? fields[2] : fields.fields1[2],
      lastname: Array.isArray(fields) ? fields[3] : fields.fields1[3],
      chatName: Array.isArray(fields) ? fields[4] : fields.fields1[4],
      phone: Array.isArray(fields) ? fields[5] : fields.fields1[5],
      changeData: Array.isArray(fields)
        ? new Button({
          text: 'Сохранить', type: 'submit',
          events: {
            click: (event: Event) => {
              const allOk = checkSubmitForm(event, formName);
              if (allOk) {
                const data = getAllFormData(event, formName);
                if (Object.hasOwn(data, 'oldPassword')) {
                  UserController.changePassword(data);
                  return;
                }
                if (Object.hasOwn(data, 'avatar2') && data.avatar2) {
                  const avatarElem = document.querySelector('input[name=avatar2]') as HTMLInputElement
                  if (avatarElem && avatarElem.files?.length) {
                    const formData = new FormData();
                    formData.append('avatar', avatarElem.files[0]);
                    UserController.changeAvatar(formData)
                      ?.then((resp: { status: number, avatar: string }) => {
                        if (resp.status === 200) {
                          const avatarImgs: NodeListOf<HTMLImageElement> =
                            document.querySelectorAll(`.${classes.profile__avatar}>img`) as NodeListOf<HTMLImageElement>;
                          avatarImgs.forEach((img: HTMLImageElement) => img.src = URL.createObjectURL(formData.get('avatar') as File));
                        }
                      })
                  }
                }
                UserController.changeProfile(data)
                  ?.then(resp => {
                    if (resp.status === 200) {
                      const data = parseJson(resp.response);
                      this.setProps({ profileName: data.first_name })
                    }
                  });
              }
            }
          }
        })
        : fields.fields2[0],
      changePassword: Array.isArray(fields) ? null : fields.fields2[1],
      exit: Array.isArray(fields) ? null : fields.fields2[2],
      avatar: Array.isArray(fields) ? avatar2 : avatar1,
      formName,
      profileName,
      button: new Button({
        text: '&larr;',
        hasSymbol: true,
        type: 'button',
        events: {
          click: () => {
            router.go(CHATS_1_PATH);
            ChatController.getChats();
          }
        }
      }),
    });
  }

  render(): DocumentFragment {
    return this.compile(profileTemplate, this.props);
  }
}

export default Profile;
