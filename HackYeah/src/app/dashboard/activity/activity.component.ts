import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/interfaces/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'score'];

  @Input() activities: Activity[] = [];

  activitiesByDate: Activity[] = [];


  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    if (!this.activities || this.activities.length === 0) {
      return;
    }
    this.activitiesByDate = this.activities.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
  }



}
