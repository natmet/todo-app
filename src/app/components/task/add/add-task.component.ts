import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskCombox } from 'src/app/core/models/task.model';
import { TaskService } from 'src/app/core/services/task.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  providers: [MessageService],
})
export class AddTaskComponent implements OnInit {
  public statusCombox: TaskCombox[] = [
    { id: 1, text: 'Pending' },
    { id: 2, text: 'Doing' },
    { id: 3, text: 'Done' },
  ];
  public disabled = true;
  public loading = false;
  public taskForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this.taskForm = this.setForm();
    this.setEvents();
  }

  private setForm(): FormGroup {
    return this.fb.group({
      taskName: [null, Validators.required],
      taskDescription: [null, Validators.required],
      taskStatus: [null, Validators.required],
    });
  }

  private setEvents(): void {
    this.taskForm.statusChanges.subscribe(() => {
      this.disabled = !this.taskForm.valid;
    });
  }

  public onSubmit(): void {
    this.taskService.saveTask(this.taskForm.value);
    this.showToast();

    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/task/list']);
    }, 2300);
  }

  private showToast(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Task Saved',
      detail: 'This Task Was Added Correctly.',
    });
  }
}
