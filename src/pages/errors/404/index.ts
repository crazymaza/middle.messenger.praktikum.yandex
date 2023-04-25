import errorTemplate from './404.hbs';
import * as classes from '../errors.module.scss';

const error404 = (): string => errorTemplate({ errorPage: classes.error__page });

export default error404;
