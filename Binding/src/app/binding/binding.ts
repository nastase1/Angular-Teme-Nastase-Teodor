import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './binding.html',
  styleUrls: ['./binding.css'],
})
export class Binding {
  frameworks = ['Angular', 'React', 'Vue', 'Svelte'];
  isListVisible = true;
  isActive = false;
  filterText = '';

  toggleList(){
    this.isListVisible = !this.isListVisible;
    this.isActive = !this.isActive;
  }

  get filteredFrameworks() {
    return this.frameworks.filter(framework =>
      framework.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
