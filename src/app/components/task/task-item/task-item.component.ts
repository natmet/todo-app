import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskStatus } from 'src/app/core/enums/task-status.enum';
import { Task } from 'src/app/core/models/task.model';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() tasks: Task[];
  @Output() loadAll = new EventEmitter();
  draggedTask: Task = null;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  dragStart(task: Task) {
    this.draggedTask = task;
  }

  dragEnd() {
    this.draggedTask = null;
  }

  public dropPending() {

    this.draggedTask.taskStatus = TaskStatus.Pending;
    this.taskService.saveTask(this.draggedTask);
    this.loadAll.emit();
  }

  public dropDoing(){

    this.draggedTask.taskStatus = TaskStatus.Doing;
    this.taskService.saveTask(this.draggedTask);
    this.loadAll.emit();
  }

  public dropDone(){

    this.draggedTask.taskStatus = TaskStatus.Done;
    this.taskService.saveTask(this.draggedTask);
    this.loadAll.emit();
  }

}
