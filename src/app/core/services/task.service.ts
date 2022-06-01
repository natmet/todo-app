import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  pendingTasks: Task[] = [
    // { taskName: 'tarea 1', taskDescription: 'desc 1', taskStatus: 1 },
    // { taskName: 'tarea 2', taskDescription: 'desc 2', taskStatus: 1 },
    // { taskName: 'tarea 3', taskDescription: 'desc 3', taskStatus: 1 }
  ];

  doingTasks: Task[] = [
    // { taskName: 'doing 1', taskDescription: 'desc 1', taskStatus: 2 },
    // { taskName: 'doing 2', taskDescription: 'desc 2', taskStatus: 2 },
  ];

  doneTasks: Task[] = [
    // { taskName: 'done 1', taskDescription: 'desc 1', taskStatus: 3  }
  ];

  constructor() {}

  getPendingTasks(): Task[] {
    return this.pendingTasks;
  }

  getDoingTasks(): Task[] {
    return this.doingTasks;
  }

  getDoneTasks(): Task[] {
    return this.doneTasks;
  }

  saveTask(task: Task): void {

    switch (task.taskStatus) {
      case 1:
        this.pendingTasks.push(task);
        break;

      case 2:
        this.doingTasks.push(task);
        break;

      case 3:
        this.doneTasks.push(task);
        break;

      default:
        break;
    }
  }
}
