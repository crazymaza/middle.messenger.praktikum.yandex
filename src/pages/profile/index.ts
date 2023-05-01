import profileTemplate from './profile.hbs';
import * as classes from './profile.module.scss';
import avatarTmp from '../../img/avatarTmp.png';
import Block from '../../utils/block';
import ProfileField from '../../components/profileField';
import Button from '../../components/button';
import ProfileInput from '../../components/profileInput';
import { checkInput, checkSubmitForm, clearError } from '../../utils/utils';
import {
  profileFields,
  rules,
  PASSWORD_SETTING_PATH,
  PROFILE_SETTING_PATH
} from '../../utils/constants';

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
      type: curr.title,
      name: curr.name,
    }),
  ], []);

  const fields2 = profileFields.second.reduce((acc, curr) => [
    ...acc,
    new ProfileField({
      title: curr.title,
      value: curr.value,
      link: curr.link,
      href: curr.href,
      type: curr.title,
      name: curr.name,
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
              checkSubmitForm(event);
            }
          }
        })
        : fields.fields2[0],
      changePassword: Array.isArray(fields) ? null : fields.fields2[1],
      exit: Array.isArray(fields) ? null : fields.fields2[2],
      avatarTmp,
      button: new Button({
        text: '&larr;',
        hasSymbol: true,
        type: 'button',
        events: {
          click: () => window.location.replace('/')
        }
      }),
    });
  }

  render(): DocumentFragment {
    return this.compile(profileTemplate, this.props);
  }
}

export default Profile;
