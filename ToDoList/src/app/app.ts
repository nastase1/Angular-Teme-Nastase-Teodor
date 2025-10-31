import { Component, signal } from '@angular/core';
import { ToDo } from "./to-do/to-do";

@Component({
  selector: 'app-root',
  imports: [ToDo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ToDoList');
}
