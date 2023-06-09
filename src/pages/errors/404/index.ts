import errorTemplate from './404.hbs';
import classes from '../errors.module.scss';
import Block from '../../../utils/block';
import { CHATS_1_PATH } from '../../../utils/constants';
import Link from '../../../components/link';
import { router } from '../../..';

class Error404 extends Block {
  constructor(props: Record<string, any> = {}) {
    super('div', { ...props, link: new Link({
      text: "Вернуться к чатам",
      href: CHATS_1_PATH,
      events: {
        click: (event) => {
          event.preventDefault();
          router.go(CHATS_1_PATH);
        },
      },
    }), ...classes });
  }

  render(): DocumentFragment {
    return this.compile(errorTemplate, this.props);
  }
}

export default Error404;
