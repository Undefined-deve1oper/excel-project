import { $ } from "@core/Dom";

export class Router {
    constructor(selector, routes) {
        if (!selector) {
            throw new Error("Selector is not provided in Router");
        }

        this.$placegolder = $(selector);
        this.routes = routes;

        this.changePageHandler = this.changePageHandler.bind(this);

        this.init();
    }

    init() {
        window.addEventListener("hashchange", this.changePageHandler);
        this.changePageHandler();
    }

    changePageHandler() {

    }

    destroy() {
        window.removeEventListener("hashchange", this.changePageHandler);
    }
}
