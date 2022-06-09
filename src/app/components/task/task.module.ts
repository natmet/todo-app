import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list/list-task.component';
import { AddTaskComponent } from './add/add-task.component';
import { EditTaskComponent } from './edit/edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { NgxMaskModule } from 'ngx-mask';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [
    ListTaskComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    PrimeNgModule,
    NgxMaskModule.forRoot(),
  ],
})
export class TaskModule {}
