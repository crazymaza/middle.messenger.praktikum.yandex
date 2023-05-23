import "./link.module.scss";
import linkTemplate from "./link.hbs";
import Block from "../../utils/block";


interface LinkProps {
  text: string;
  href: string;
  events: {
    click: (event: Event) => void;
  };
  classes?: string;
}

class Link extends Block {
  constructor(props: LinkProps) {
    super("div", props);
  }

  render() {
    return this.compile(linkTemplate, this.props);
  }
}

export default Link;
