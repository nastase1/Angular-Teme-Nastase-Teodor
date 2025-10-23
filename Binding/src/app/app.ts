import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Binding } from "./binding/binding";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Binding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Binding');
}
