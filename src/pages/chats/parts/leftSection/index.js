import leftSectionTemplate from "./leftSection.hbs";
import * as classes from "./leftSection.module.scss";

const leftSection = ({items}) => {
  const context = {
    chatLeftSection: classes.chat__left_section,
    profile: classes.profile,
    search: classes.search,
    items,
  };

  return leftSectionTemplate(context);
};

export default leftSection;
