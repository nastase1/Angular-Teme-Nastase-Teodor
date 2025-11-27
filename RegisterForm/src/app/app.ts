import { Component, signal } from '@angular/core';
import { RegisterForm } from "./register-form/register-form";

@Component({
  selector: 'app-root',
  imports: [RegisterForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RegisterForm');
}
