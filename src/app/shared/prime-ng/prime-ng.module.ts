import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    DropdownModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    DragDropModule,
    CardModule,
    ToastModule
  ],
  exports: [
    DropdownModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    DragDropModule,
    CardModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
