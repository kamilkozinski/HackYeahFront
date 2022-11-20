import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Activity } from '../interfaces/activity';
import { UserStatsService } from '../services/user-stats.service';
import { LeaderboardItem } from '../types/LeaderboardItem';

export interface PeriodicElement {
  name: string;
  position: number;
  count: number;
  date: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  leaderboardMock: LeaderboardItem[] = [
    {
      "username": "john",
      "score": 1243,
      "rank": "destroyer"
    },
    {
      "username": "gokul",
      "score": 44444,
      "rank": "destroyer"
    },
    {
      "username": "kamil",
      "score": 1999,
      "rank": "destroyer"
    },
    {
      "username": "john",
      "score": 1673,
      "rank": "destroyer"
    },
    {
      "username": "john",
      "score": 1243,
      "rank": "destroyer"
    },
    {
      "username": "gokul",
      "score": 44444,
      "rank": "destroyer"
    },
    {
      "username": "kamil",
      "score": 1999,
      "rank": "destroyer"
    },
    {
      "username": "john",
      "score": 1673,
      "rank": "destroyer"
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'count', 'date'];
  activityList: Activity[] = [];
  constructor(
    private authService: AuthService,
    private userStatsService: UserStatsService
  ) {
    this.userStatsService.getAllActivity(1).subscribe((x) => {
      this.activityList = x;
    });
  }

  ngOnInit(): void {
    console.log(this.activityList);
  }

  logout() {
    this.authService.logout();
  }
}
