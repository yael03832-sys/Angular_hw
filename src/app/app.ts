import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './users.data';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = USERS;

  // הקופסה שזוכרת את השם שנלחץ. מתחילה ריקה.
  selectedName = signal('');

  // נקראת כשהילד מדווח. name הוא מה שנשלח ב-emit
  onUserSelected(name: string) {
    this.selectedName.set(name);
  }
}