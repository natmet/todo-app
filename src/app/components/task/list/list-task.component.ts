import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/core/models/task.model';
import { TaskStatus } from 'src/app/core/enums/task-status.enum';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  private draggedTask: Task;
  public pendingTasks!: Task[];
  public doingTasks!: Task[];
  public doneTasks!: Task[];

  constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    this.taskService.loadSavedTasks();
    this.loadAllTasks();
  }

  public loadAllTasks() {
    this.pendingTasks = this.taskService.getPendingTasks();
    this.doingTasks = this.taskService.getDoingTasks();
    this.doneTasks = this.taskService.getDoneTasks();
  }

  public allowDrop($event: DragEvent): void {
    $event.preventDefault();
  }

  public dropPending() {
    this.draggedTask.taskStatus = TaskStatus.Pending;
    this.taskService.saveTask(this.draggedTask);
    this.loadAllTasks();
  }

  public dropDoing() {
    this.draggedTask.taskStatus = TaskStatus.Doing;
    this.taskService.saveTask(this.draggedTask);
    this.loadAllTasks();
  }

  public dropDone() {
    this.draggedTask.taskStatus = TaskStatus.Done;
    this.taskService.saveTask(this.draggedTask);
    this.loadAllTasks();
  }

  public dragStart(task: Task) {
    this.draggedTask = task;
  }

  public dragEnd() {
    this.draggedTask = null;
  }
}
