import { Component, Input, OnInit } from '@angular/core';
import { debug } from 'console';
import { LeaderboardItem } from 'src/app/types/LeaderboardItem';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  displayedColumns: string[] = ['username', 'score', 'rank'];

  @Input() leaderboardItems: LeaderboardItem[] = [];

  leaderBoardByScore: LeaderboardItem[] = [];


  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    if (!this.leaderboardItems || this.leaderboardItems.length === 0) {
      return;
    }
    this.leaderBoardByScore = this.leaderboardItems.sort((a, b) => {
      return b.score - a.score;
    })
    console.log(this.leaderBoardByScore, 'litems')

  }


}
