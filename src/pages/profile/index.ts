import profileTemplate from './profile.hbs';
import * as classes from './profile.module.scss';
import avatarTmp from '../../img/avatarTmp.png';

interface ProfileInterface {
  button: string,
  fields1: string,
  fields2?: string,
}

const profile = ({ button, fields1, fields2 }: ProfileInterface): string => {
  const context = {
    profileWrapper: classes.profile__wrapper,
    profileTop: classes.profile__top,
    profileAvatar: classes.profile__avatar,
    avatarName: classes.profile__avatar_name,
    profileFields: classes.profile__fields,
    profileChange: classes.profile__change,
    back: classes.back,
    button,
    avatarTmp,
    fields1,
    fields2,
  };

  return profileTemplate(context);
};

export default profile;
