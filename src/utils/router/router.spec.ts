import Router from "./router";
import { JSDOM } from "jsdom";
import Block from "../block";
import { expect } from "chai";
import * as Handlebars from "handlebars";

const templatePage = `<h1 id="page">Page</h1>`;
const templateOtherPage = `<h1 id="otherPage">OtherPage</h1>`;

class Page extends Block {
  constructor() {
    super("div");
  }

  render() {
    const templateHandlebars = Handlebars.compile(templatePage);
    return this.compile(templateHandlebars, this.props);
  }
}

class OtherPage extends Block {
  constructor() {
    super("div");
  }

  render() {
    const templateHandlebars = Handlebars.compile(templateOtherPage);
    return this.compile(templateHandlebars, this.props);
  }
}

describe("Router", () => {
  beforeEach(() => {
    const { window } = new JSDOM(
      `<html>
         <body>
          <div id="root"></div>
         </body>
       </html>`,
      { url: "http://localhost" }
    );

    global.window = window;
    global.document = window.document;
  });

  it("use", () => {
    const router = new Router("#root");
    router.use("/", Page);
    expect(router.routes.length).eq(1);
  });

  it("start", () => {
    const router = new Router("#root");
    router.use("/", Page).start();
    expect(document.body.innerHTML).to.contain(templatePage);
  });
  it("go", () => {
    const router = new Router("#root");
    router.use("/", Page).use("/otherPage", OtherPage).start();
    router.go("/otherPage");
    expect("/otherPage").to.eq(router.getCurrentRouter()._pathname);
    expect(document.body.innerHTML).to.contain(templateOtherPage);
  });
});
