import { Injectable } from '@angular/core';
import { TaskStatus } from '../enums/task-status.enum';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  allTask: Task[] = [];

  constructor() {}

  private saveInLocalStorage(task: Task): void {

    try {
      const storedTask = JSON.parse(localStorage.getItem('task')) ?? [] ;

      let taskToSave = [...storedTask,task]

      localStorage.setItem('task', JSON.stringify(taskToSave));

    } catch (error) {
      console.log("Error saving local storage");

    }

  }

  public loadSavedTasks(){

    this.allTask = JSON.parse(localStorage.getItem('task'));

  }

  public getPendingTasks(): Task[] {
    return this.allTask.filter(task => task.taskStatus === TaskStatus.Pending);
  }

  public getDoingTasks(): Task[] {
    return this.allTask.filter(task => task.taskStatus === TaskStatus.Doing);
  }

  public getDoneTasks(): Task[] {
    return this.allTask.filter(task => task.taskStatus === TaskStatus.Done);
  }

  public saveTask(task: Task): void {
    if(isNaN(task.IdTask)){
      task.IdTask = this.allTask.length+1;
      this.allTask.push(task);
      this.saveInLocalStorage(task);
    }else {
      const index = this.allTask.findIndex(taskSaved => taskSaved.IdTask === task.IdTask);

      if(index >= 0){
        this.allTask[index] = {...task};
      }
    }
  }
}
