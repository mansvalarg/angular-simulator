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

  companyName: string = 'РУМТИБЕТ';

  constructor() {
    this.saveLastVisit();
    this.saveVisitCount();
  }

  isMainColor(value: Color): boolean {
    return [Color.RED, Color.GREEN, Color.BLUE].includes(value);
  }

  saveLastVisit(): void {
    const now: string = new Date().toString();
    localStorage.setItem('lastVisit', now);
  }

  saveVisitCount(): void {
    const count: string | null = localStorage.getItem('visit-count');
    const newCount: number = Number(count) + 1;
    localStorage.setItem('visit-count', newCount.toString());
  }

}