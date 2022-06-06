import { Injectable } from '@angular/core';
import { TaskStatus } from '../enums/task-status.enum';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  allTask: Task[] = [];

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
      localStorage.setItem(`${task.IdTask}`,JSON.stringify(task));
    }else {
      const index = this.allTask.findIndex(taskSaved => taskSaved.IdTask === task.IdTask);

      if(index >= 0){
        this.allTask[index] = {...task};
      }
    }
  }
}
