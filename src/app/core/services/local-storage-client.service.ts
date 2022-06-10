import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageClientService {
  public saveTask(task: Task): void {
    try {
      const storedTask = JSON.parse(localStorage.getItem('task')) ?? [];
      const taskToSave = [...storedTask, task];

      localStorage.setItem('task', JSON.stringify(taskToSave));
    } catch (error) {
      console.log('Error saving local storage');
    }
  }

  public updateTasks(taskId: number, task: Task): void {
    const actualTasks: Array<Task> = JSON.parse(localStorage.getItem('task'));
    const taskIndex: number = actualTasks.findIndex(
      (task) => task.IdTask === taskId
    );

    actualTasks[taskIndex] = task;

    localStorage.clear();
    localStorage.setItem('task', JSON.stringify(actualTasks));
  }
}
