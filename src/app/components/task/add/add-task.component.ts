import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  taskForm!: FormGroup;
  disabled = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.setForm();
    this.setEvents();
  }

  setForm(): FormGroup {
    return this.fb.group({
      taskName: [null, Validators.required],
      taskDescription: [null, Validators.required]
    })

  }

  setEvents(): void {
    this.taskForm.statusChanges.subscribe(()=> {
      this.disabled = this.taskForm.valid ? false : true;
    })
  }

  onSubmit(): void{
    console.log(this.taskForm.value);

  }



}
