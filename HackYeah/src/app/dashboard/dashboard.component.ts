import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  testRequest$: Observable<any> = this.testService.sendTestRequest();

  constructor(
    private authService: AuthService,
    private testService: TestService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
