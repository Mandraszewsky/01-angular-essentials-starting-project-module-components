import { Component, EventEmitter, inject, Output, Input } from '@angular/core';

import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  private taskService = inject(TaskService); //alternative to constructor injection


  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredDate,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
    this.close.emit();
  }
}
