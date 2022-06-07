import { TestBed } from "@angular/core/testing";
import { TaskStatus } from "../enums/task-status.enum";
import { Task } from "../models/task.model";
import { TaskService } from "./task.service";

describe("TaskService", ()=>{

  let service: TaskService;

  beforeEach(()=> { service = new TaskService(); });


  it('should return Pending tasks', ()=>{
    service.getPendingTasks().forEach(task => {
      expect(task.taskStatus).toBe(TaskStatus.Pending);
    })
  })

  it('should return Doing tasks', ()=>{
    service.getDoingTasks().forEach(task => {
      expect(task.taskStatus).toBe(TaskStatus.Doing);
    })
  })

  it('should return Done tasks', ()=>{
    service.getDoneTasks().forEach(task => {
      expect(task.taskStatus).toBe(TaskStatus.Done);
    })
  })

  it('should add an IdTask to the task if the task dont have one', ()=>{
    const task: Task = { taskName: 'First Task', taskDescription: 'Description Task', taskStatus: 1 }
    service.saveTask(task);
    expect(service.allTask[0].IdTask).toBeTruthy();
  })

  it('should replace the task if the IdTask exist', ()=> {
    const task: Task = { IdTask : 1, taskName: 'First Task', taskDescription: 'Description Task', taskStatus: 2 }
    const secondTask: Task = { IdTask : 1, taskName: 'Second Task', taskDescription: 'Description Task', taskStatus: 2 }
    service.saveTask(task);
    service.saveTask(secondTask);
    expect(service.allTask[0]).toEqual(secondTask);
  })

})
