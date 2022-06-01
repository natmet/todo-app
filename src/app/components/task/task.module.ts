import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list/list-task.component';
import { AddTaskComponent } from './add/add-task.component';
import { EditTaskComponent } from './edit/edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DragDropModule } from 'primeng/dragdrop';
import { CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    ListTaskComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    DragDropModule,
    CardModule
  ],
})
export class TaskModule {}
