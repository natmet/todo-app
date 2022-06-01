import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  pendingTasks: Task[] = [
    { taskName: 'tarea 1', taskDescription: 'desc 1' },
    { taskName: 'tarea 2', taskDescription: 'desc 2' },
    { taskName: 'tarea 3', taskDescription: 'desc 3' },
    { taskName: 'tarea 4', taskDescription: 'desc 4' }
  ];

  doingTasks: Task[] = [
    { taskName: 'doing 1', taskDescription: 'desc 1' },
    { taskName: 'doing 2', taskDescription: 'desc 2' }
  ];

  doneTasks: Task[] = [
    { taskName: 'done 1', taskDescription: 'desc 1' },
    { taskName: 'tarea 2', taskDescription: 'desc 2' },
    { taskName: 'tarea 3', taskDescription: 'desc 3' },
    { taskName: 'tarea 4', taskDescription: 'desc 4' }
  ];

  constructor() {}

  getTask(): Task[] {
    return this.pendingTasks;
  }

}
