import { Component } from '@angular/core';
import { InterviewComponent } from './components/interview/interview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InterviewComponent],
  template: `<app-interview></app-interview>`
})
export class AppComponent {}