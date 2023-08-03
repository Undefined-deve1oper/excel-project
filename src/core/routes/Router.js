import { $ } from "@core/Dom";
import { ActiveRoute } from "@core/routes/ActiveRoute";

export class Router {
    constructor(selector, routes) {
        if (!selector) {
            throw new Error("Selector is not provided in Router");
        }

        this.$placeholder = $(selector);
        this.routes = routes;

        this.changePageHandler = this.changePageHandler.bind(this);

        this.init();
    }

    init() {
        window.addEventListener("hashchange", this.changePageHandler);
        this.changePageHandler();
    }

    changePageHandler() {
        const selectedPath= ActiveRoute.path || "";
        const PageComponent = this.routes[selectedPath];

        if (!PageComponent) {
            throw new Error(`Selected path "${selectedPath}" is undefined!!!`);
        }

        const page = new PageComponent();
        this.$placeholder.html("");
        this.$placeholder.append(page.getRoot());

        page.afterRender();
    }

    destroy() {
        window.removeEventListener("hashchange", this.changePageHandler);
    }
}
