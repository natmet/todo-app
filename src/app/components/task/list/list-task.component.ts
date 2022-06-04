import {  Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/core/models/task.model';
import { TaskStatus } from 'src/app/core/enums/task-status.enum';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  pendingTasks!: Task[];
  doingTasks!: Task[];
  doneTasks!: Task[];
  draggedTask: Task = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadAllTasks();
  }

  public loadAllTasks() {
    this.pendingTasks = this.taskService.getPendingTasks();
    this.doingTasks = this.taskService.getDoingTasks();
    this.doneTasks = this.taskService.getDoneTasks();
  }

  allowDrop($event: DragEvent): void{
   $event.preventDefault();
 }

 public dropPending() {

  this.draggedTask.taskStatus = TaskStatus.Pending;
  this.taskService.saveTask(this.draggedTask);
  this.loadAllTasks();
}

public dropDoing(){

  this.draggedTask.taskStatus = TaskStatus.Doing;
  this.taskService.saveTask(this.draggedTask);
  this.loadAllTasks();
}

public dropDone(){

  this.draggedTask.taskStatus = TaskStatus.Done;
  this.taskService.saveTask(this.draggedTask);
  this.loadAllTasks();
}

dragStart(task: Task) {
  this.draggedTask = task;
}

dragEnd() {
  this.draggedTask = null;
}

}
