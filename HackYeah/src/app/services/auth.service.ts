import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../types/User';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { off } from 'process';
import { UserMe } from '../types/UserMe';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private helper = new JwtHelperService();

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  userId: number = 0;
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login(user: User) {
    return this.http
      .post(environment.baseURL + '/user/auth/signin', user, {
        responseType: 'text',
      })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.snackBar.open('Failed to login:' + err.status, 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 1000,
            panelClass: 'danger',
          });
          return of('');
        }),
        map((response: any) => {
          console.log(response);
          if (response) {
            localStorage.setItem('token', response);
            this.router.navigateByUrl('/dashboard');
            this.snackBar.open('Logged in succesfully!', 'Close', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 1000,
              panelClass: 'success',
            });
          }
        })
      );
  }

  register(user: User) {
    return this.http.post(environment.baseURL + '/user/auth/register', user, {
      responseType: 'text',
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token') as string;
    console.log(this.helper?.isTokenExpired(token));
    return !this.helper?.isTokenExpired(token);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  decodeToken() {
    return this.helper.decodeToken(localStorage.getItem('token') as string);
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
  // getMe(): Observable<UserMe> {
  //   return this.http.get<UserMe>(environment.baseURL + '/classification/me/');
  // }
}
