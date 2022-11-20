import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-average-gauge',
  templateUrl: './monthly-average-gauge.component.html',
  styleUrls: ['./monthly-average-gauge.component.css']
})
export class MonthlyAverageGaugeComponent implements OnInit {
  @Input() monthlyAverage: number = 100;

  dynamicClass: string = '';

  displayedAverage: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.animateNumberIncrease();
  }

  animateNumberIncrease() {
    if (0 === this.monthlyAverage) return;
    let range = this.monthlyAverage - 0;
    let increment: number = 1;
    let stepTime = Math.abs(Math.floor(800 / range));
    let timer = setInterval(() => {
      this.displayedAverage += increment;

      if (this.displayedAverage < 10) {
        this.dynamicClass = 'ten';
      } else if (this.displayedAverage < 20) {
        this.dynamicClass = 'twenty';
      } else if (this.displayedAverage < 50) {
        this.dynamicClass = 'fifty';
      } else if (this.displayedAverage < 70) {
        this.dynamicClass = 'seventy';
      } else if (this.displayedAverage < 90) {
        this.dynamicClass = 'ninety';
      }

      if (this.displayedAverage == this.monthlyAverage) {
        clearInterval(timer);
      }
    }, stepTime);
  }

}
