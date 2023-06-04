import { Route } from "./route";

class Router {
    static __instance: any;
    routes: any[];
    history: History;
    private _currentRoute: any;
    private _rootQuery: any;
    constructor(rootQuert: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this._rootQuery = rootQuert;
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;

        Router.__instance = this;
    }

    use(pathname: string, block: any) {
        const route = new Route(pathname, block, this._rootQuery);

        this.routes.push(route);

        // Возврат this — основа паттерна "Builder" («Строитель»)
        return this;
    }

    start() {
        // Реагируем на изменения в адресной строке и вызываем перерисовку
        window.onpopstate = (event: any) => {
            this._onRoute(event.currentTarget.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render(route, pathname);
    }

    go(pathname: string) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}

export default Router;
