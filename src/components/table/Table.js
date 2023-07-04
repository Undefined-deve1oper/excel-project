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

            document.onmousemove = (e) => {
                const delta = e.pageX - coords.right;
                const value = coords.width + delta;

                const id = $parent.$el.dataset.id;
                const cells = document.querySelectorAll(`[data-id="${id}"]`);
                cells.forEach((cell) => {
                    cell.style.width = value + "px";
                });
                $resizer.$el.style.opacity = "1";
                $resizer.$el.style.height = this.$root.$el.scrollHeight + "px";
            };

            document.onmouseup = () => {
                $resizer.$el.style.cssText = `
                    opacity: 0px;
                    height: 100%;
                `;
                document.onmousemove = null;
            };
        }
    }
}
