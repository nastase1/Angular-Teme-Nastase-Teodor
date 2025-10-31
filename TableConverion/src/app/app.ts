import { Component, signal } from '@angular/core';
import { TableWithConversion } from "./table-with-conversion/table-with-conversion";

@Component({
  selector: 'app-root',
  imports: [TableWithConversion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TableConverion');
}
