import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  pendingTasks!: Task[];
  doingTasks!: Task[];
  doneTasks!: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.pendingTasks = this.taskService.getPendingTasks();
    this.doingTasks = this.taskService.getDoingTasks();
    this.doneTasks = this.taskService.getDoneTasks();
  }



}
