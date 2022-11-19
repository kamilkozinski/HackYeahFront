import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TestService } from '../services/test.service';

export interface PeriodicElement {
  name: string;
  position: number;
  count: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Cinema Tickets', count: 9, date: '19-11-2022' },
  { position: 2, name: 'Zara Voucher', count: 6, date: '18-10-2022' },
  { position: 3, name: 'MPK Tickets', count: 2, date: '05-09-2022' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  testRequest$: Observable<any> = this.testService.sendTestRequest();
  displayedColumns: string[] = ['position', 'name', 'count', 'date'];
  dataSource = ELEMENT_DATA;
  constructor(
    private authService: AuthService,
    private testService: TestService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
