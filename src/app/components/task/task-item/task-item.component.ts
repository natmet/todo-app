import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() tasks: Task[];
  @Output() draggedStart = new EventEmitter();
  draggedTask: Task = null;

  public startDragging($event: Task) {
    this.draggedStart.emit($event);
  }
}
