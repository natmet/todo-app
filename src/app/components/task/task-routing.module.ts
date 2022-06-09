import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './list/list-task.component';
import { AddTaskComponent } from './add/add-task.component';
import { EditTaskComponent } from './edit/edit-task.component';

const routes: Routes = [
  { path: 'list', component: ListTaskComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'edit:/id', component: EditTaskComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
