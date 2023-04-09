import leftSectionTemplate from "./leftSection.hbs";
import classes from "./leftSection.module.scss";

const leftSection = ({items}) => {
  const context = {
    chatLeftSection: classes.chat__left_section,
    profile: classes.profile,
    search: classes.search,
    footerForm: classes.footer__form,
    items,
  };

  return leftSectionTemplate(context);
};

export default leftSection;