import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/interfaces/activity';
import { UserStatsService } from 'src/app/services/user-stats.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'score'];

  @Input() activities: Activity[] = [];

  activitiesByDate: Activity[] = [];

  constructor(private userStatsService: UserStatsService) {}

  ngOnInit(): void {
    this.getAllActivities();
    console.log('Activities test' + this.activitiesByDate);
  }
  ngOnChanges() {
    this.getAllActivities();
    if (!this.activities || this.activities.length === 0) {
      return;
    }
    this.activitiesByDate = this.activities.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }
  getAllActivities(): void {
    this.userStatsService
      .getAllActivity(this.userStatsService.userId)
      .subscribe((x) => (this.activitiesByDate = [...x]));
  }
}
