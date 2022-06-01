import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/core/models/task.model';
import { TaskStatus } from 'src/app/core/enums/task-status.enum';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  pendingTasks!: Task[];
  doingTasks!: Task[];
  doneTasks!: Task[];
  draggedTask: Task = null;

  constructor(private taskService: TaskService,
    private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.pendingTasks = this.taskService.getPendingTasks();
    this.doingTasks = this.taskService.getDoingTasks();
    this.doneTasks = this.taskService.getDoneTasks();
  }

  dragStart(event: Event, task: Task) {
    this.draggedTask = task;
  }

  drop() {
    const taskStatus = this.draggedTask.taskStatus;

    this.doingTasks = [...this.doneTasks, this.draggedTask];
    // this.availableProducts = this.availableProducts.filter((val,i) => i!=draggedProductIndex);
    // this.draggedProduct = null;
  }

  // findIndex(task: Task) {
  //   let index = -1;
  //   for(let i = 0; i < this.availableProducts.length; i++) {
  //       if (task === this.availableProducts[i].id) {
  //           index = i;
  //           break;
  //       }
  //   }
  // return index;

  dragEnd() {
    this.draggedTask = null;
  }

}
