import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cv',
  imports: [],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class Cv {
  isNightMode = false;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('profileImg') profileImg!: ElementRef<HTMLImageElement>;

  toggleNightMode() {
    this.isNightMode = !this.isNightMode;
  }

  openFileSelector() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (this.profileImg) {
          this.profileImg.nativeElement.src = e.target?.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

}
