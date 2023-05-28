import Block from "../block";
import renderDom, { isEqualString } from "../utils";

export class Route {
    _pathname: string;
    _blockClass: any;
    _block: Block | null;
    _props: any
    constructor(pathname: string, view: Block, props: any) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    //создавать блоки
  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  //скрывать
  leave() {
    if (this._block) {
      this._block.remove();
    }
  }

  match(pathname: string) {
    return isEqualString(pathname, this._pathname);
  }

    render() {
        this._block = new this._blockClass;
        if (this._block) {
            renderDom(this._props, this._block);
            return;
        }
    }
}
