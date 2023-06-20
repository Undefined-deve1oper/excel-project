import { ExcelComponent } from "@core/ExcelComponent";

export class Toolbar extends ExcelComponent {
    static className = "excel__toolbar";

    constructor($root) {
        super($root, {
            name: "Toolbar",
            listeners: ["click"],
        });
    }

    onClick(event) {
        console.log("Toolbar click: ", event);
    }


    toHTML() {
        return `
            <div class="button">
                <i class="material-icons">format_align_left</i>
            </div>

            <div class="button">
                <i class="material-icons">format_align_center</i>
            </div>

            <div class="button">
                <i class="material-icons">format_align_right</i>
            </div>

            <div class="button">
                <i class="material-icons">format_bold</i>
            </div>

            <div class="button">
                <i class="material-icons">format_italic</i>
            </div>

            <div class="button">
                <i class="material-icons">format_underlined</i>
            </div>
        `;
    }
}
