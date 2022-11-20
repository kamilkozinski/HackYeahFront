import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  CategoryScale,
  Chart,
  ChartType,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Activity } from 'src/app/interfaces/activity';

@Component({
  selector: 'app-total-points',
  templateUrl: './total-points.component.html',
  styleUrls: ['./total-points.component.css'],
})
export class TotalPointsComponent implements OnInit {
  chart: Chart = undefined as any;

  dates: string[] = [];
  scoreSums: number[] = [];

  @Input() activities: Activity[] = [];

  constructor() {
    Chart.register(
      LineController,
      LineElement,
      PointElement,
      LinearScale,
      Title,
      CategoryScale,
      Tooltip
    );
  }
  ngOnChanges() {
    if (!this.activities || this.activities.length === 0) {
      return;
    }
    const activitiesByDate = this.activities.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    this.dates = activitiesByDate.map((x) => x.date);

    this.scoreSums = [activitiesByDate[0].score];
    activitiesByDate.forEach((x) => {
      this.scoreSums.push(this.scoreSums[this.scoreSums.length - 1] + x.score);
    });

    console.log(this.scoreSums, 'scoreSums');
    this.renderChart();
  }

  ngOnInit(): void {}

  renderChart() {
    const elem = document.getElementById('myChart') as HTMLCanvasElement;

    const data = {
      labels: this.dates,
      datasets: [
        {
          label: 'My First Dataset',
          data: this.scoreSums,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
    const lineChartType: ChartType = 'line';

    const config = {
      type: lineChartType,
      data: data,
    };

    this.chart = new Chart(elem, config);
  }
}
