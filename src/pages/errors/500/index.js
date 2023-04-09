import errorTemplate from "./500.hbs";
import * as classes from "../errors.module.scss";

const error500 = () => errorTemplate({errorPage: classes.error__page});

export default error500;