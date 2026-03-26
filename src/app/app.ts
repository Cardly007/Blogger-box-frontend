import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.component.css's
})
export class App {
  protected readonly title = signal('blogger-box-frontend');
}
