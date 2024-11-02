import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/card/shared.module";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent],
    imports: [SharedModule, FormsModule, CommonModule]
})
export class TasksModule{}