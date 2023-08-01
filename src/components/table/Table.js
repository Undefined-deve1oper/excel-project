import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "@/components/table/table.template";
import { resizeHandler } from "@/components/table/table.resize";
import { isCell, isMultiplySelection, matrix, nextSelector, shouldResize } from "@/components/table/table.functions";
import { TableSelection } from "@/components/table/TableSelection";
import { $ } from "@core/Dom";

export class Table extends ExcelComponent {
    static className = "excel__table";

    constructor($root, options) {
        super($root, {
            name: "Table",
            listeners: ["mousedown", "keydown"],
            ...options,
        });
    }

    toHTML() {
        return createTable(30);
    }

    prepare() {
        this.selection = new TableSelection();
    }

    init() {
        super.init();

        const $cell = this.$root.find("[data-id='0:0']");
        this.selection.select($cell);

        this.$on("formula:input", (text) => {
            this.selection.current.text(text);
        });
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        } else if (isCell(event)) {
            const $target = $(event.target);
            if (isMultiplySelection(event)) {
                const $cells = matrix($target, this.selection.current)
                    .map((id) => this.$root.find(`[data-id="${id}"]`));
                this.selection.selectGroup($cells);
            } else {
                this.selection.select($target);
            }
        }
    }

    onKeydown(event) {
        const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Enter"];
        const { key } = event;

        if (keys.includes(key) && !event.shiftKey) {
            event.preventDefault();
            const id = this.selection.current.id(true);
            const $next = this.$root.find(nextSelector(key, id));
            this.selection.select($next);
        }
    }
}
