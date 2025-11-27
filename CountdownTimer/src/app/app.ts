import { Component, signal } from '@angular/core';
import { CountdownTimer } from "./countdown-timer/countdown-timer";

@Component({
  selector: 'app-root',
  imports: [CountdownTimer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CountdownTimer');
}
