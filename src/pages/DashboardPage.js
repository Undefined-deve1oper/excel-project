import { Page } from "@core/page/Page";
import { createRecordsTable } from "../shared/dashboard.functions";
import { $ } from "@core/Dom";

export class DashboardPage extends Page {
    getRoot() {
        const now = Date.now().toString();

        return $.create("div", "db").html(`
            <div class="db__header">
                <h1>Excel. Панель Управления</h1>
            </div>
        
            <div class="db__new">
                <div class="db__view">
                    <a href="#excel/${now}" class="db__create">
                        <i class="material-icons">add</i>
                    </a>
                </div>
            </div>
        
            <div class="db__table db__view">
                ${createRecordsTable()}
            </div>
        `);
    }
}
