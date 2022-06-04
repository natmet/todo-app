import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskStatus } from 'src/app/core/enums/task-status.enum';
import { Task } from 'src/app/core/models/task.model';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() tasks: Task[];
  @Output() draggedStart = new EventEmitter();
  draggedTask: Task = null;

  constructor() { }

  ngOnInit(): void {
  }

  public startDragging($event: Task){
    this.draggedStart.emit($event);
  }


}
