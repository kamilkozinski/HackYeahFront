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
      username: 'john1998',
      score: 12000,
      rank: ' DE_COMPOSTER',
    },
    {
      username: 'Gokul1410',
      score: 11000,
      rank: 'DE_COMPOSTER',
    },
    {
      username: 'kamil_k',
      score: 18000,
      rank: 'TRASH_GOD',
    },
    {
      username: 'Joanna2137',
      score: 16500,
      rank: 'BIG_BIN',
    },
    {
      username: 'joDDhn69',
      score: 1243,
      rank: 'destroyer',
    },
    {
      username: 'nikocado_avocado',
      score: 44218,
      rank: 'MR_BIN',
    },
    {
      username: 'santa_claus',
      score: 8000,
      rank: 'ROOKIE_TRASHMAN',
    },
    {
      username: 'Morg',
      score: 4000,
      rank: 'NOO_BIN',
    },
  ];

  displayedColumns: string[] = ['position', 'name', 'count', 'date'];
  activityList: Activity[] = [];
  constructor(
    private authService: AuthService,
    private userStatsService: UserStatsService
  ) {
    this.userStatsService.getAllActivity(8).subscribe((x) => {
      this.activityList = [...x];
    });
  }

  ngOnInit(): void {
    console.log(this.activityList);
  }

  logout() {
    this.authService.logout();
  }
}
