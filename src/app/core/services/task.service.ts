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
      // const newTask: Task = { IdTask: null, taskName: null,taskDescription: null, taskStatus: null }
      // const storedTask = JSON.parse(localStorage.getItem('task')) || newTask ;

      // console.log("Stored Task:", storedTask);

      // let taskToSave = {...storedTask,...task}
      // console.log("Task to save:", taskToSave);

      // localStorage.setItem('task', JSON.stringify(taskToSave));

      localStorage.setItem(`task_${task.IdTask}`,JSON.stringify(task));



    } catch (error) {
      console.log("Error saving local storage");

    }

  }

  public loadSavedTasks(){
    console.log("hola");

    let taskIndex = 1;

    while(localStorage.getItem(`task_${taskIndex}`)){
      console.log("entre");
      const task = JSON.parse(localStorage.getItem(`task_${taskIndex}`));
      this.saveTask(task);
      taskIndex++;
    };
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
