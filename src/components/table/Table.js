import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "./table.template";
import { $ } from "@core/Dom";

export class Table extends ExcelComponent {
    static className = "excel__table";

    constructor($root) {
        super($root, {
            name: "Table",
            listeners: ["mousedown"],
        });
    }

    toHTML() {
        return createTable();
    }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            const $resizer = $(event.target);
            const $parent = $resizer.closest("[data-type=\"resizable\"]");
            const coords = $parent.getCoords();

            const elements = this.$root.findAll(`[data-col="${$parent.data.col}"]`);

            document.onmousemove = (e) => {
                const delta = e.pageX - coords.right;
                const value = coords.width + delta;

                elements.forEach((el) => el.style.width = value + "px");
            };

            document.onmouseup = () => {
                document.onmousemove = null;
            };
        }
    }
}
