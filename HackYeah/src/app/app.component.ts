import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = this.authService.loggedIn();

  constructor(private authService: AuthService) {

  }
  ngDoCheck() {
    this.loggedIn = this.authService.loggedIn();

  }

}
