import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() name!: string;
  @Input() avatar!: string;

  // ערוץ דיווח להורה
  @Output() userSelected = new EventEmitter<string>();

  onClick() {
    this.userSelected.emit(this.name);   // שולח להורה את השם
  }
}