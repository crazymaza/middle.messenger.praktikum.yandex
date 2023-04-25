import type Message from '../../../../components/message';
import Block from '../../../../utils/block';
import rightSectionTemplate from './rightSection.hbs';
import * as classes from './rightSection.module.scss';

interface RightSectionInterface {
  section?: Message[] | string;
}

const NO_CHAT_TEXT = '<h1>Выберите чат чтобы отправить сообщение</h1>';

class RightSection extends Block<RightSectionInterface> {
  constructor(tagName: string = 'div', props: RightSectionInterface = { section: NO_CHAT_TEXT }) {
    super(tagName, props);
    this.children = props.section;
  }

  context = {
    chatRightSection: classes.chat__right_section,
    section: this.props.section,
  };

  render(): DocumentFragment {
    return this.compile(rightSectionTemplate, { ...this.props.section });
  }
}

export default RightSection;
