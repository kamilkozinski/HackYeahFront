import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  goBackToMain(): void {
    this.router.navigate(['']);
  }
  goToLeaderboard(): void {
    this.router.navigate(['leaderboard']);
  }
  goToDashboard(): void {
    this.router.navigate(['dashboard']);
  }
  goToBlog(): void {
    this.router.navigate(['blog']);
  }
  goToPrizeCatalog(): void {
    this.router.navigate(['prizeCatalog']);
  }
  logout() {
    this.authService.logout();
  }
}
