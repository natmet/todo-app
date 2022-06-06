import { Injectable } from '@angular/core';
import { TaskStatus } from '../enums/task-status.enum';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  allTask: Task[] = [
    {IdTask: 1, taskName: 'First Task', taskDescription: 'Description Task', taskStatus: 1},
    {IdTask: 2, taskName: 'First Task', taskDescription: 'Description Task', taskStatus: 2},
    {IdTask: 3, taskName: 'First Task', taskDescription: 'Description Task', taskStatus: 3}
  ];

  constructor() {}

  getPendingTasks(): Task[] {
    return this.allTask.filter(task => task.taskStatus === TaskStatus.Pending);
  }

  getDoingTasks(): Task[] {
    return this.allTask.filter(task => task.taskStatus === TaskStatus.Doing);
  }

  getDoneTasks(): Task[] {
    return this.allTask.filter(task => task.taskStatus === TaskStatus.Done);
  }

  saveTask(task: Task): void {
    if(isNaN(task.IdTask)){
      task.IdTask = this.allTask.length+1;
      this.allTask.push(task);
    }else {
      const index = this.allTask.findIndex(taskSaved => taskSaved.IdTask === task.IdTask);

      if(index >= 0){
        this.allTask[index] = {...task};
      }
    }
  }
}
