import './training.ts';
import { Component } from '@angular/core';
import { Color } from '../enums/Color.js';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    this.saveLastVisit();
    this.saveVisitCount();
  }

  checkColor(value: Color): boolean {
    return value === Color.RED || value === Color.GREEN || value === Color.BLUE;
  }

  saveLastVisit() {
    const now = new Date().toString();
    localStorage.setItem('lastVisit', now);
  }

  saveVisitCount() {
    const count = localStorage.getItem('visitCount');
    const newCount = Number(count) + 1;
    localStorage.setItem('visitCount', newCount.toString());
  }

}