export class TableSelection {
    constructor() {
        this.group = [];
    }

    select($el) {
        this.group.forEach(($el) => {
            $el.removeClass("selected");
        });

        this.group.push($el);
        $el.addClass("selected");
    }

    selectGroup() {

    }
}
